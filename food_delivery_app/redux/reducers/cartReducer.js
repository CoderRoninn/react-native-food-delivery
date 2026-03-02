import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from '../constants';

/**
 * Cart Reducer
 * Manages cart data state and handles cart-related actions
 */
const initialState = {
    item: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                item: [...state.item, action.payload],
            };
        case REMOVE_FROM_CART:
            let newCart = [...state.item];
            let itemIndex = state.item.findIndex(index => index._id === action.payload);
            // Check if the item is in the cart
            if (itemIndex >= 0) {
                newCart.splice(itemIndex, 1);
            }
            return {
                ...state,
                item: newCart,
            };
        case EMPTY_CART:
            return {
                ...state,
                item: [],
            };
        default:
            return state;
    }
};

export default cartReducer;
