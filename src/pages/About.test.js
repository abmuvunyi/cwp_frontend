import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About text', () => {
  render(<About />);
  const textElement = screen.getByText(/About/i);
  expect(textElement).toBeInTheDocument();
});
