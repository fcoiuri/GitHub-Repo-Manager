import MobileNavBar from '@/components/MobileNavBar';
import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';

describe('MobileNavBar', () => {
  test('should render a user section with SVG', () => {
    render(<MobileNavBar />);

    const heartIcon = screen.getByTestId('user-icon');

    expect(heartIcon).toBeInTheDocument();
  });

  test('should render a favorite section with SVG', () => {
    render(<MobileNavBar />);

    const heartIcon = screen.getByTestId('favorites-icon');

    expect(heartIcon).toBeInTheDocument();
  });
});
