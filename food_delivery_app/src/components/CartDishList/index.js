import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import * as Icon from 'react-native-feather';
import { COLORS, BG_COLORS } from '../../const/design/theme';
import { responsive } from '../../utils/responsive';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../../redux/selectors/cartSelectors';
import { removeFromCart, addToCart } from '../../../redux/actions/cartActions';
import { urlFor } from '../../api/sanity';
import { styles } from './styles';

/**
 * CartDishList Component
 * Displays grouped cart items with quantity controls
 *
 * - Groups items by ID
 * - Shows dish image, name, quantity, and total price
 * - Plus/Minus buttons to add/remove items
 *
 * Used in: CartScreen
 */
const CartDishList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems); // Get cart items from Redux 
    const [groupedItems, setGroupedItems] = useState({});

    // Group items by their ID using forEach
    const groupItemsById = (items) => {
        const group = {};
        items.forEach(item => {
            if (group[item._id]) {
                group[item._id].push(item);
            } else {
                group[item._id] = [item];
            }
        });
        return group;
    };

    // Calculate total price of grouped items
    const calculateTotalPrice = (items) => {
        let total = 0;
        items.forEach(item => {
            total += item.price;
        });
        return total;
    };

    // Update grouped items when cart changes
    useEffect(() => {
        setGroupedItems(groupItemsById(cartItems));
    }, [cartItems]);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
            style={styles.scrollView}
        >
            {
                // Convert object to array 
                Object.entries(groupedItems).map(([key, items]) => {
                    // Get first item as dish
                    let dish = items[0];
                    return (
                        <View key={key} style={styles.dishItemContainer}>
                            <Image source={{ uri: urlFor(dish.image).url() }} style={styles.dishImage} />
                            <Text style={styles.dishName}>{dish.name}</Text>
                            <View style={styles.qtyActionContainer}>
                                <Pressable
                                    onPress={() => dispatch(addToCart({ ...dish }))}
                                    style={styles.qtyBtn}
                                >
                                    <Icon.Plus strokeWidth={3} height={responsive.number(22)} width={responsive.number(22)} stroke={BG_COLORS.BG_COLOR(1)} />
                                </Pressable>
                                <Text style={styles.qtyText}>{items.length}</Text>
                                <Pressable
                                    onPress={() => dispatch(removeFromCart(dish._id))}
                                    style={styles.qtyBtn}
                                >
                                    <Icon.Minus strokeWidth={3} height={responsive.number(22)} width={responsive.number(22)} stroke={COLORS.GRAY_500} />
                                </Pressable>
                            </View>
                            <Text style={styles.dishPrice}>{calculateTotalPrice(items)} TL</Text>
                        </View>
                    );
                })
            }
        </ScrollView>
    );
};

export default CartDishList;
