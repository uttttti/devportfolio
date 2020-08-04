import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExcuseDialog from './ExcuseDialog';

describe('<ExcuseDialog />', () => {
  test('it should mount', () => {
    render(<ExcuseDialog />);
    
    const excuseDialog = screen.getByTestId('ExcuseDialog');

    expect(excuseDialog).toBeInTheDocument();
  });
});