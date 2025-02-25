import Title from '@/components/Title';
import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';

describe('Title', () => {
  test('should render a user section with SVG', () => {
    render(<Title label="test" />);

    const titleText = screen.getByText('test');

    expect(titleText).toBeInTheDocument();
  });
});
