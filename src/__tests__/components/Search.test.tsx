import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '@/components/Search';

describe('Search Component', () => {
  test('renders search input with correct placeholder and aria-label', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Buscar usuário');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-label', 'Buscar usuário');
  });

  test('renders submit button with correct aria-label', () => {
    render(<Search />);
    const button = screen.getByRole('button', { name: 'Buscar' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Buscar');
  });
});
