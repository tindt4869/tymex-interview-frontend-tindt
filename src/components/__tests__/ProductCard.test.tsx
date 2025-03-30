import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import ProductCard from '../ProductCard';
import { IProduct } from '../../types/product';

const mockProduct: IProduct = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  category: 'Hat',
  isFavorite: false,
  createdAt: Date.now(),
  theme: 'Dark',
  tier: 'Premium',
  imageId: 123,
  author: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    gender: 'male',
    avatar: 'test-avatar.jpg',
    onlineStatus: 'online'
  }
};

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price} ETH`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.author.firstName} ${mockProduct.author.lastName}`)).toBeInTheDocument();
  });
}); 