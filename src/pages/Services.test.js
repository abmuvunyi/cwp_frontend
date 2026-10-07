import { render, screen } from '@testing-library/react';
import Services from './Services';

test('renders Services text', () => {
  render(<Services />);
  const textElement = screen.getByText(/Services/i);
  expect(textElement).toBeInTheDocument();
});
