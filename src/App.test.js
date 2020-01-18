import React from 'react';
import { render } from '@testing-library/react';
import App from './App';



test('page renders without error', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/Amazing songs/i);
  expect(welcomeElement).toBeInTheDocument();
});


