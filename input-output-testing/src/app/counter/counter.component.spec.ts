import { render, screen, fireEvent } from '@testing-library/angular';
import { CounterComponent } from './counter.component';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

describe('CounterComponent', () => {
  it('should increment and decrement the counter', async () => {
    await render(CounterComponent, {
      componentProperties: { initialValue: 5 }
    });

    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('6')).toBeInTheDocument();

    fireEvent.click(screen.getByText('-'));
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should emit the count when send button is clicked', async () => {
    const { fixture } = await render(CounterComponent, {
      componentProperties: { initialValue: 3 }
    });

    const component = fixture.componentInstance;
    spyOn(component.result, 'emit');

    fireEvent.click(screen.getByText('Send'));
    expect(component.result.emit).toHaveBeenCalledWith(3);
  });
});
