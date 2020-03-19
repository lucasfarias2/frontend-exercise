import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Input from '../input';

afterEach(cleanup);

describe('<Input />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Input
        value="test"
        placeholder="test"
        onChange={() => {
          return;
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
