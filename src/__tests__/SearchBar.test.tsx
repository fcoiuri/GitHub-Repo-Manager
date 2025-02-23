import { render, screen } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';
import { describe } from 'node:test';

describe('SearchBar', () => {
  test('should render a text input and a search button', () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText(/Buscar usuário/i);
    const button = screen.getByRole('button');
    const svgElement = button.querySelector('svg');

    expect(button).toBeInTheDocument();
    expect(svgElement).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('should render a favorite section with the Heart icon and text "Favoritos"', () => {
    render(<SearchBar />);

    const favoriteText = screen.getByText('Favoritos');
    const favoriteContainer = favoriteText.closest('div');
    const heartIcon = screen.getByTestId('heart-icon');

    expect(favoriteText).toBeInTheDocument();
    expect(favoriteContainer).toBeInTheDocument();
    expect(heartIcon).toBeInTheDocument();
  });
});
