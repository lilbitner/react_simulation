import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.1'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});













