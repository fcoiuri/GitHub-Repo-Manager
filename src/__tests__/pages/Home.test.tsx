import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  test('should render homePage texts and HomePage icon', () => {
    render(<Home />);

    expect(
      screen.getByText('Procure pelo Nome ou Nome de Usuário')
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Encontre os repositórios de algum usuário digitando no campo acima'
      )
    ).toBeInTheDocument();

    const svgElement = screen.getByTestId('home-page-icon');

    expect(svgElement).toBeInTheDocument();
  });
});
