import { render, screen, fireEvent } from '@testing-library/react';
import QuestionsList from './QuestionsList';
import { Provider } from 'react-redux'
import store from './store'

test('renders the first Question', () => {
  render(<Provider store={store}><QuestionsList /></Provider>);
  const linkElement = screen.getByText(/Question 1/i);
  expect(linkElement).toBeInTheDocument();
});

test('does not render Question 2 from the beginning', () => {
  render(<Provider store={store}><QuestionsList /></Provider>);
  const linkElement = screen.queryByText(/Question 2/i);
  expect(linkElement).toBeNull();
});

test('renders Question 2 after clicking the Option one', () => {
  render(<Provider store={store}><QuestionsList /></Provider>);
  fireEvent.click(screen.getByLabelText('Option one'))
  const linkElement = screen.getByText(/Question 2/i);
  expect(linkElement).toBeInTheDocument();
});
