// import necessary react testing library helpers here
import {render, fireEvent, screen} from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';



beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const number = screen.getByText(/0/i);
  expect(number).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('+'));
  const number = screen.getByText(/1/i);
  expect(number).toBeInTheDocument();

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('-'));
  const number = screen.getByText(/-1/i);
  expect(number).toBeInTheDocument();
});
