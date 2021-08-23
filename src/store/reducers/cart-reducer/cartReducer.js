import { TOGGLE_DISPLAY_CART, ADD_ITEM_TO_CART } from "../../actions/cart-actions/cartActionTypes";
import { addItemToCart } from "../../../utils/cart-utils/cartUtils";

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
            }

        default:
            return state;
    }
}