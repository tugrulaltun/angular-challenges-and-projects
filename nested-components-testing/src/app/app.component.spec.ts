import {fireEvent, render, screen} from '@testing-library/angular';
import {AppComponent} from './app.component';
import {InputComponentComponent} from './input-component/input-component.component';
import {ButtonComponentComponent} from './button-component/button-component.component';
import {ResultComponentComponent} from './result-component/result-component.component';
import {ErrorComponentComponent} from './error-component/error-component.component';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

describe('AppComponent', () => {
  beforeEach(async () => {
    await render(AppComponent, {
      declarations: [
        InputComponentComponent,
        ButtonComponentComponent,
        ResultComponentComponent,
        ErrorComponentComponent
      ],
    });
  });

  it('should display result component with title on valid input', async () => {
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {target: {value: 'Valid Title'}});
    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Submitted Title: Valid Title')).toBeInTheDocument();
  });

  it('should display error component on empty input', async () => {
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {target: {value: ''}});
    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Error: Invalid title')).toBeInTheDocument();
  });

  it('should not display result or error component initially', () => {
    expect(screen.queryByText('Submitted Title:')).toBeNull();
    expect(screen.queryByText('Error:')).toBeNull();
  });

  it('should update display when input is changed after submission', async () => {
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {target: {value: 'First Title'}});
    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Submitted Title: First Title')).toBeInTheDocument();

    fireEvent.input(input, {target: {value: 'Second Title'}});
    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Submitted Title: Second Title')).toBeInTheDocument();
  });

  it('should display error when submit button is clicked without input', async () => {
    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Error: Invalid title')).toBeInTheDocument();
  });

  it('should clear error message on valid submission after invalid attempt', async () => {
    const input = screen.getByRole('textbox');
    const submitButton = screen.getByText('Submit');

    // First, submit an invalid title
    fireEvent.input(input, {target: {value: ''}});
    fireEvent.click(submitButton);
    expect(screen.getByText('Error: Invalid title')).toBeInTheDocument();

    // Now, submit a valid title
    fireEvent.input(input, {target: {value: 'Valid Title'}});
    fireEvent.click(submitButton);

    // Check if the error message is cleared and valid title is displayed
    expect(screen.queryByText('Error: Invalid title')).toBeNull();
    expect(screen.getByText('Submitted Title: Valid Title')).toBeInTheDocument();
  });
});
