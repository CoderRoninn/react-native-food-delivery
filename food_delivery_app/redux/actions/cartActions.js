/**
 * Cart Actions
 */
import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from '../constants';

const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item,
    };
};

const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    };
};

const emptyCart = () => {
    return {
        type: EMPTY_CART,
    };
};

export { addToCart, removeFromCart, emptyCart };
