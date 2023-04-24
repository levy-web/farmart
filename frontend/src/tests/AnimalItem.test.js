import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AnimalItem from '../components/farmer/myAnimals/AnimalItem';

const mockAnimal = {
  name: 'Fluffy',
  age: 2,
  image_url: 'https://example.com/fluffy.jpg'
};

describe('AnimalItem', () => {
  it('should render the animal name and age', () => {
    render(
      <MemoryRouter>
        <AnimalItem animal={mockAnimal} />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/name:/i)).toHaveTextContent('name: Fluffy');
    expect(screen.getByText(/age:/i)).toHaveTextContent('age: 2');
  });

  it('should render the animal image', () => {
    render(
      <MemoryRouter>
        <AnimalItem animal={mockAnimal} />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/fluffy.jpg');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Fluffy');
  });

  it('should have a link to the animal detail page', () => {
    render(
      <MemoryRouter>
        <AnimalItem animal={mockAnimal} />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('link')).toHaveAttribute('href', '/farm/animals/Fluffy');
  });
});
