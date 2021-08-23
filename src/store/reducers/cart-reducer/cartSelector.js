import { createSelector } from 'reselect';
import { reduceItem } from '../../../utils/cart-utils/cartUtils';

// an input selector that 
const selectCart = state => state.cartReducer;


export const selectCartItems = createSelector([selectCart], (cart) => {
    return cart.cartItems
})


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    // reducde item is an imported util function
    (cartItems) => reduceItem(cartItems, "quantity")
);