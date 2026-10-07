import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home link in navigation', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i, { selector: 'a' });
  expect(linkElement).toBeInTheDocument();
});
