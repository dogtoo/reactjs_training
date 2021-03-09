import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('user info import', ()=>{
  render(<App />);
  const nameElement = screen.getByText(/Name:/i);
  expect(nameElement).toBeInTheDocument();
  const ageElement = screen.getByText(/Age:/i);
  expect(ageElement).toBeInTheDocument();
  const genderElement = screen.getByText(/Gender:/i);
  expect(genderElement).toBeInTheDocument();
});