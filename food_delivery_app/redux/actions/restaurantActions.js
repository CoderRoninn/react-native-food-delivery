/**
 * Restaurant Actions
 */
import { SET_RESTAURANT } from '../constants';

const setRestaurant = (restaurant) => {
    return {
        type: SET_RESTAURANT,
        payload: restaurant,
    };
};

export { setRestaurant };
