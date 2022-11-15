import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Cart from './Cart';
import { within } from '@testing-library/dom';
import { CartProvider } from '../../core/contexts/CartContext';

beforeEach(function () {
    render(
        <CartProvider>
            <Cart></Cart>
        </CartProvider>
    );
});

describe('<Cart> component', () => {
    it('renders the title', () => {
        const title = screen.getByText('Shopping Cart');
    
        expect(title).toBeInTheDocument();
    });

    describe('cart items', () => {
        it('get rendered', async () => {
            await waitFor(() => {
                const cartItems = screen.getAllByTestId('cart-item');
        
                cartItems.forEach(cartItem => {
                    expect(cartItem).toBeInTheDocument();
                })
            });
        });

        it('have a remove button', async () => {
            await waitFor(() => {
                const cartItems = screen.getAllByTestId('cart-item');
        
                cartItems.forEach(cartItem => {
                    expect(
                        cartItem.getElementsByClassName('remove').length
                    ).toBe(1);
                })
            });
        });

        it('have an amount', async () => {
            await waitFor(() => {
                const cartItems = screen.getAllByTestId('cart-item');
        
                cartItems.forEach(cartItem => {
                    expect(
                        cartItem.getElementsByClassName('amount').length
                    ).toBe(1);
                })
            });
        });

        it('have a name', async () => {
            await waitFor(() => {
                const cartItems = screen.getAllByTestId('cart-item');
        
                cartItems.forEach(cartItem => {
                    expect(
                        cartItem.getElementsByClassName('name').length
                    ).toBe(1);
                })
            });
        });

        it('have a total price', async () => {
            await waitFor(() => {
                const cartItems = screen.getAllByTestId('cart-item');
        
                cartItems.forEach(cartItem => {
                    expect(
                        cartItem.getElementsByClassName('total-price').length
                    ).toBe(1);
                })
            });
        });

        it('removes an item by clicking the remove button', async () => {
            await waitFor(() => {
                const cartItems = screen.getAllByTestId('cart-item');
                const previousLength = cartItems.length;
                const removeButton = within(cartItems[0]).getByRole('removeButton');
                
                fireEvent.click(removeButton);

                expect(screen.getAllByTestId('cart-item').length).toBe(previousLength - 1);
            });
        });
    })
});
