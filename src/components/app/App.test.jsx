import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SeinfeldQuote from '../../containers/SeinfeldQuote';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<SeinfeldQuote />);
    expect(asFragment()).toMatchSnapshot();
  });
});
