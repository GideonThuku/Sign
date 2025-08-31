
import { render, screen, fireEvent } from '@testing-library/react';
import CvBuilderPage from '../pages/cv-builder';

describe('CV Builder', () => {
  it('validates required fields', () => {
    render(<CvBuilderPage />);
    fireEvent.click(screen.getByRole('button', { name: /save cv/i }));
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });
});
