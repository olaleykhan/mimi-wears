import { combineReducers } from 'redux';
import { userReducer } from './user-reducer/userReducer';
import { cartReducer } from './cart-reducer/cartReducer';

const rootReducer = combineReducers({
    userReducer: userReducer,
    cartReducer: cartReducer
})

export default rootReducer;