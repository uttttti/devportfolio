import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Education from './Education';

describe('<Education />', () => {
  test('it should mount', () => {
    render(<Education />);
    
    const education = screen.getByTestId('Education');

    expect(education).toBeInTheDocument();
  });
});