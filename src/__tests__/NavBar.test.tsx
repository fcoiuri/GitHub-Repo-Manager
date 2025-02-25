import { render, screen } from '@testing-library/react';
import NavBar from '@/components/NavBar';
import { describe } from 'node:test';

describe('NavBar', () => {
  test('should render a text input and a search button', () => {
    render(<NavBar />);

    const input = screen.getByPlaceholderText(/Buscar usuário/i);
    const button = screen.getByRole('button');
    const svgElement = button.querySelector('svg');

    expect(button).toBeInTheDocument();
    expect(svgElement).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('should render a favorite section with the Heart icon and text "Favoritos"', () => {
    render(<NavBar />);

    const favoriteText = screen.getByText('Favoritos');
    const favoriteContainer = favoriteText.closest('div');
    const heartIcon = screen.getByTestId('heart-icon');

    expect(favoriteText).toBeInTheDocument();
    expect(favoriteContainer).toBeInTheDocument();
    expect(heartIcon).toBeInTheDocument();
  });
});
