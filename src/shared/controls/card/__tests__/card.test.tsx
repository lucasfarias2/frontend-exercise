import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from '../card';

afterEach(cleanup);

describe('<Card />', () => {
  it('renders correctly', () => {
    const { container } = render(<Card className="test" />);
    expect(container).toMatchSnapshot();
  });
});
