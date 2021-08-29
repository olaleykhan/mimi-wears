import { TOGGLE_DISPLAY_CART, ADD_ITEM_TO_CART, REDUCE_CART_ITEM_QUANTITY, REMOVE_ITEM_FROM_CART } from "../../actions/cart-actions/cartActionTypes";
import { addItemToCart, reduceCartItemQuantity, removeCartItem } from "../../../utils/cart-utils/cartUtils";
// import { reduceCartItemQuantity } from "../../actions/cart-actions/cartActions";

const INITIAL_STATE = {
    displayMiniCart: false,
    cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_DISPLAY_CART:

            return {
                ...state,
                displayMiniCart: !state.displayMiniCart
            };
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                // cartItems: state.cartItems.concat(action.payload)
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case REDUCE_CART_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: reduceCartItemQuantity(state.cartItems, action.payload)
            };
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}