import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('user info name', ()=>{
  render(<App />);
  const nameElement = screen.getByText(/Nickel/i);
  expect(nameElement).toBeInTheDocument();
});