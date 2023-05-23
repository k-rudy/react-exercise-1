import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

test('renders the first Question', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/Question 1/i);
  expect(linkElement).toBeInTheDocument();
});

test('does not render FinalPathNote', () => {
  render(<Provider store={store}><App /></Provider>);
  const finalPath = screen.queryByText(/Final Path/i);
  expect(finalPath).toBeNull();
});
