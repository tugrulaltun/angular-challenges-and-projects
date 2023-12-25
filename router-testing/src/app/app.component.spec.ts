import {fireEvent, render, screen, waitFor} from '@testing-library/angular';
import {AppComponent} from './app.component';
import {BookService} from './book.service';
import {RouterTestingModule} from '@angular/router/testing';
import {of, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {TestBed} from "@angular/core/testing";
import {expect} from '@jest/globals';

describe('AppComponent with Router', () => {
  let router: Router;
  let bookServiceMock: any;

  beforeEach(async () => {
    bookServiceMock = {
      search: jest.fn(),
    };

    await render(AppComponent, {
      imports: [RouterTestingModule],
      providers: [{provide: BookService, useValue: bookServiceMock}],
    });

    router = TestBed.inject(Router);
    jest.spyOn(router, 'navigate');
  });

  it('navigates to book details page on successful search', async () => {
    bookServiceMock.search.mockReturnValue(of({title: 'Test Book', id: 123}));

    fireEvent.input(screen.getByRole('textbox'), {target: {value: 'Test Book'}});
    fireEvent.keyUp(screen.getByRole('textbox'), {key: 'Enter'});

    await waitFor(() => {
      expect(router.navigate).toHaveBeenCalledWith(['/book-details', 123]);
    });
  });

  it('navigates to error page on unsuccessful search', async () => {
    bookServiceMock.search.mockReturnValue(throwError(() => new Error('Not Found')));

    fireEvent.input(screen.getByRole('textbox'), {target: {value: 'Unknown Book'}});
    fireEvent.keyUp(screen.getByRole('textbox'), {key: 'Enter'});

    await waitFor(() => {
      expect(router.navigate).toHaveBeenCalledWith(['/error']);
    });
  });
});
