import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../const/screens';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../../redux/selectors/cartSelectors';
import styles from './styles';

/**
 * CartBar Component
 * Floating cart bar displayed at the bottom of the screen
 *
 * - Badge Section (Displays total item count)
 * - Action Text (View Cart button text)
 * - Price Section (Displays total order amount)
 *
 * Used in: RestaurantScreen
 */
const CartBar = () => {
    const navigation = useNavigation();
    // Call selector to get cart items
    const cartItems = useSelector(selectCartItems);
    // Call selector to get cart total
    const cartTotal = useSelector(selectCartTotal);

    // If no items in cart, don't show the bar
    if (!cartItems.length) return null;

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => navigation.navigate(SCREENS.CART)}
                style={styles.pressable}>
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>{cartItems.length}</Text>
                </View>
                <Text style={styles.cartText}>Sepeti Görüntüle</Text>
                <Text style={styles.priceText}>{cartTotal} TL</Text>
            </Pressable>
        </View>
    );
};

export default CartBar;
