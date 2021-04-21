import { render, screen } from '@testing-library/react';
import MyTraining from '../components/MyTraining';

beforeEach(() => {
  render (<MyTraining />)
})

test('renders a list of training', () => {
  expect(screen.getByRole('list')).toBeInTheDocument();
})

test('training list has heading of My Training', () => {
  expect(screen.getByRole('heading')).toHaveTextContent('My Training');
})