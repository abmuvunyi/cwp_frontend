import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer text', () => {
  render(<Footer />);
  const textElement = screen.getByText(/2023 Colitium Word processing/i);
  expect(textElement).toBeInTheDocument();
});
