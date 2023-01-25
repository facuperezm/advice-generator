import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios'
import Home from '../pages/index';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { slip: { id: 1, advice: 'Mock advice' } } }))
}))

const mockAdvice = { id: 1, advice: 'Mock advice' };

describe('Home component', () => {
  test('should render the initial advice', async () => {
    const { getByTestId } = render(<Home advices={mockAdvice}/>);
    const adviceText = getByTestId('advice-text');
    expect(adviceText.textContent).toBe('Mock advice');
  });

  test('should fetch new advice on button click', async () => {
    const { getByTestId } = render(<Home advices={mockAdvice}/>);
    const button = getByTestId('advice-button');
    const adviceText = getByTestId('advice-text');
    fireEvent.click(button);
    expect(adviceText.textContent).not.toBe('Mock advice');
  });
});
