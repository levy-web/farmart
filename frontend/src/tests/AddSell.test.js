import React from 'react';
import { render } from 'react-dom';
import AddSell from '../components/farmer/AddSell';

// Mock the FarmerNav module
jest.mock('../components/farmer/FarmerNav', () => () => null);

describe('AddSell', () => {
  it('should render without throwing an error', () => {
    const div = document.createElement('div');
    render(<AddSell />, div);
    expect(div.querySelector('h2').textContent).toBe('Insert your new animal');
    render(null, div);
  });
});
