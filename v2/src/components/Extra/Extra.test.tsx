import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Extra from './Extra';

describe('<Extra />', () => {
  test('it should mount', () => {
    render(<Extra />);
    
    const extra = screen.getByTestId('Extra');

    expect(extra).toBeInTheDocument();
  });
});