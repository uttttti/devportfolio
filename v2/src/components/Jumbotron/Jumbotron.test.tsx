import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Jumbotron from './Jumbotron';

describe('<Jumbotron />', () => {
  test('it should mount', () => {
    render(<Jumbotron />);
    
    const jumbotron = screen.getByTestId('Jumbotron');

    expect(jumbotron).toBeInTheDocument();
  });
});