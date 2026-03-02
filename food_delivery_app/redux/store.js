import { createStore, combineReducers } from 'redux';
import restaurantReducer from './reducers/restaurantReducer';
import cartReducer from './reducers/cartReducer';

// Combine reducers
const rootReducer = combineReducers({
    cart: cartReducer,
    restaurant: restaurantReducer,
});

export default createStore(rootReducer);
