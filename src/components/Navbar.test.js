import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

test('renders Navbar links', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  expect(screen.getByText(/Home/i, { selector: 'a' })).toBeInTheDocument();
  expect(screen.getByText(/About/i, { selector: 'a' })).toBeInTheDocument();
  expect(screen.getByText(/Services/i, { selector: 'a' })).toBeInTheDocument();
  expect(screen.getByText(/Blog/i, { selector: 'a' })).toBeInTheDocument();
  expect(screen.getByText(/Contact/i, { selector: 'a' })).toBeInTheDocument();
});
