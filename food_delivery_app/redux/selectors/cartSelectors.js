/**
 * Cart Selectors
 * Functions to retrieve and transform cart data from the global state
 */

// Get all items in the cart
const selectCartItems = (state) => state.cart.item;

// Get items filtered by a specific ID 
const selectCartItemsById = (state, id) => state.cart.item.filter(item => item._id === id);

// Calculate total price of all items in the cart
const selectCartTotal = (state) => state.cart.item.reduce((total, item) => total + item.price, 0);

export { selectCartItems, selectCartItemsById, selectCartTotal };
