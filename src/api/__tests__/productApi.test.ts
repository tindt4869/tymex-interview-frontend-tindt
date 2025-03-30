import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchProducts } from '../productApi';
import { IProduct, Theme, Tier } from '../../types';
import { IFilters } from '../../types/filters';

const mockGet = vi.hoisted(() => vi.fn());

vi.mock('axios', () => ({
  default: {
    create: () => ({
      get: mockGet,
      defaults: {
        baseURL: 'http://localhost:5005',
        timeout: 5000
      }
    })
  }
}));

describe('productApi', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches products successfully', async () => {
    const mockProducts: IProduct[] = [
      {
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
      }
    ];

    const filters: IFilters = {
      query: 'test',
      minPrice: 0.01,
      maxPrice: 100,
      theme: 'Dark' as Theme,
      tier: 'Premium' as Tier,
      time: -1,
      price: -1,
      page: 0,
      limit: 10
    };

    mockGet.mockResolvedValueOnce({
      data: mockProducts,
      headers: {
        'x-total-count': '1'
      }
    });

    const result = await fetchProducts(filters);

    expect(result).toEqual({
      data: mockProducts,
      nextPage: null
    });

    expect(mockGet).toHaveBeenCalledWith('/products', {
      params: {
        title_like: 'test',
        theme: 'Dark',
        tier: 'Premium',
        price_gte: 0.01,
        price_lte: 100,
        _sort: 'createdAt,price',
        _order: 'desc,desc',
        _page: 0,
        _limit: 10
      }
    });
  });

  it('handles API errors', async () => {
    const errorMessage = 'Network Error';
    const error = new Error(errorMessage);
    mockGet.mockRejectedValueOnce(error);

    await expect(fetchProducts({ price: -1 })).rejects.toThrow(errorMessage);
  });
}); 