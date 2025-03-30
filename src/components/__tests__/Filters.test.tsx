import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import Filters from '../Filters';
import { IFilters } from '../../types/filters';

vi.mock('@tanstack/react-router', async () => {
  const actual = await vi.importActual('@tanstack/react-router');
  return {
    ...actual,
    useSearch: () => ({
      query: '',
      minPrice: 0,
      maxPrice: 200,
      theme: 'All',
      tier: 'All',
      time: -1,
      price: -1
    }),
  };
});

describe('Filters', () => {
  const mockOnFilterChange = vi.fn();

  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  it('renders all filter sections', () => {
    renderWithProviders(
      <Filters
        onFilterChange={mockOnFilterChange}
      />
    );

    // Check if all filter sections are present
    expect(screen.getAllByText('Price')[0]).toBeInTheDocument();
    expect(screen.getByText('Theme')).toBeInTheDocument();
    expect(screen.getByText('Tier')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
  });

  it('calls onFilterChange when filters are changed', async () => {
    renderWithProviders(
      <Filters
        onFilterChange={mockOnFilterChange}
      />
    );

    // Test theme change using the select component
    const themeLabel = screen.getByText('Theme');
    const themeSelect = themeLabel.nextElementSibling?.querySelector('.ant-select-selector') as HTMLElement;
    expect(themeSelect).toBeTruthy();
    fireEvent.mouseDown(themeSelect);

    // Wait for the dropdown to appear and click the Dark option
    const darkOption = await screen.findByTitle('Dark');
    fireEvent.click(darkOption);

    expect(mockOnFilterChange).toHaveBeenCalledWith(expect.objectContaining({
      theme: 'Dark'
    } as Partial<IFilters>));
  });

  it('resets filters when reset button is clicked', () => {
    renderWithProviders(
      <Filters
        onFilterChange={mockOnFilterChange}
      />
    );

    const resetButton = screen.getByText('Reset Filter');
    fireEvent.click(resetButton);

    // The first call should be the initial state
    expect(mockOnFilterChange).toHaveBeenNthCalledWith(1, expect.objectContaining({
      theme: 'All',
      tier: 'All',
      price: -1,
      minPrice: 0,
      maxPrice: 200,
      query: '',
      time: -1
    }));
  });
}); 