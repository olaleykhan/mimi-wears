import { TOGGLE_DISPLAY_CART, ADD_ITEM_TO_CART } from "./cartActionTypes"
export const toggleDisplayCart = () => {
    return {
        type: TOGGLE_DISPLAY_CART
    }

};

export const addItemToCart = (item) => ({
    type: ADD_ITEM_TO_CART,
    payload: item
})