import {fireEvent, render, screen} from '@testing-library/angular';
import '@testing-library/jest-dom';
import {AppComponent} from './app.component';
import {TestBed} from "@angular/core/testing";

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should disable the button initially', async () => {
    await render(AppComponent);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should enable the button when the checkbox is checked', async () => {
    await render(AppComponent);
    const checkbox = screen.getByLabelText('Enable Button');
    fireEvent.click(checkbox);
    expect(screen.getByRole('button')).toBeEnabled();

    screen.debug();
    screen.logTestingPlaygroundURL();
  });
});
