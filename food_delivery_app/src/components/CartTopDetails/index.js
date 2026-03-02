import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../const/design/theme';
import { styles } from './styles';

/**
 * CartTopDetails Component
 * Displays cart screen header with back navigation and delivery info
 *
 * - Cart title and restaurant name display
 * - Back button overlay positioned at top-left
 * - Delivery time section with rider image
 * - Change delivery option button
 * - Receives restaurantName as prop from parent (CartScreen)
 *
 * Used in: CartScreen
 */
const CartTopDetails = ({ restaurantName }) => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.headerContainer}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Icon.ArrowLeft strokeWidth={3} stroke={COLORS.WHITE} />
                </Pressable>
                <View>
                    <Text style={styles.headerTitle}>Sepetiniz</Text>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                </View>
            </View>

            <View style={styles.deliveryContainer}>
                <Image
                    source={require('../../../assets/images/delivery.png')}
                    style={styles.deliveryImage}
                />
                <Text style={styles.deliveryText}>20-30 dakika içinde teslimat</Text>
                <Pressable>
                    <Text style={styles.changeText}>Değiştir</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default CartTopDetails;
