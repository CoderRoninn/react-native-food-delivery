import { SET_RESTAURANT } from '../constants';

const initialState = {
    restaurant: null,
};


const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESTAURANT:
            return {
                ...state,
                restaurant: action.payload,
            };
        default:
            return state;
    }
};

export default restaurantReducer;
