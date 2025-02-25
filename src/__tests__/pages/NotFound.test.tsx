import { render, screen } from '@testing-library/react';
import NotFound from '@/app/users/[username]/not-found';
import { describe } from 'node:test';

describe('NotFound', () => {
  test('should render a title with user searched', () => {
    render(<NotFound username="test" />);

    const title = screen.getByTestId('title');
    const notFoundSVG = screen.getByTestId('user-not-found-icon');
    const noUser = screen.getByText('Nenhum usuário encontrado');
    const checkLetter = screen.getByText(
      'Verifique se a escrita está correta ou tente novamente'
    );

    expect(title).toBeInTheDocument();
    expect(notFoundSVG).toBeInTheDocument();
    expect(noUser).toBeInTheDocument();
    expect(checkLetter).toBeInTheDocument();
  });
});
