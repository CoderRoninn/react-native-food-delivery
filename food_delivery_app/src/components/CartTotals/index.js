import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../const/screens';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../../redux/selectors/cartSelectors';

/**
 * CartTotals Component
 * Displays order summary with price breakdown and place order action
 *
 * - Subtotal row with calculated amount
 * - Delivery fee row with fee amount
 * - Order total row with bold styling
 * - Place Order button with full-width pressable
 * - Rounded top corners container with themed background
 *
 * Used in: CartScreen
 */

const CartTotals = () => {
    const navigation = useNavigation();
    // Call selector to get cart total
    const cartTotal = useSelector(selectCartTotal);
    const deliveryFee = 2; // Fixed delivery fee

    return (
        <View style={styles.totalsContainer}>
            <View style={styles.totalRow}>
                <Text style={styles.subTotalText}>Ara Toplam</Text>
                <Text style={styles.subTotalText}>{cartTotal} TL</Text>
            </View>
            <View style={styles.totalRow}>
                <Text style={styles.subTotalText}>Teslimat Ücreti</Text>
                <Text style={styles.subTotalText}>{deliveryFee} TL</Text>
            </View>
            <View style={styles.totalRow}>
                <Text style={styles.totalTextBold}>Toplam</Text>
                <Text style={styles.totalTextBold}>{cartTotal + deliveryFee} TL</Text>
            </View>
            <View>
                <Pressable
                    onPress={() => navigation.navigate(SCREENS.ORDER_PREPARATION)}
                    style={styles.orderButton}
                >
                    <Text style={styles.orderButtonText}>
                        Siparişi Onayla
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default CartTotals;
