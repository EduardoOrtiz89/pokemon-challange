import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';


test('renders Home Screen', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
