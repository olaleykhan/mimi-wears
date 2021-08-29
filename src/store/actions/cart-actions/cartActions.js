import { TOGGLE_DISPLAY_CART, ADD_ITEM_TO_CART, REDUCE_CART_ITEM_QUANTITY, REMOVE_ITEM_FROM_CART } from "./cartActionTypes"
export const toggleDisplayCart = () => {
    return {
        type: TOGGLE_DISPLAY_CART
    }

};

export const addItemToCart = (item) => ({
    type: ADD_ITEM_TO_CART,
    payload: item
})

export const reduceCartItemQuantity = (item) => ({
    type: REDUCE_CART_ITEM_QUANTITY,
    payload: item
});

export const removeItemFromCart = (item) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: item
})

