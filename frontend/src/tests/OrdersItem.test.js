import React from 'react';
import { render } from '@testing-library/react';
import OrdersItem from '../components/farmer/Orders/OrdersItem';

describe('OrdersItem', () => {
  const mockOrders = {
    id: 1,
    img_url: 'https://example.com/image.jpg',
    name: 'Example Order',
    age: 30
  };

  it('should render without throwing an error', () => {
    const { getByText } = render(<OrdersItem orders={mockOrders} />);
    expect(getByText('order number: 1')).toBeInTheDocument();
  });
});
