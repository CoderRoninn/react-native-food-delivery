import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../const/design/theme';
import * as Icon from 'react-native-feather';
import { SCREENS } from '../../const/screens';
import LottieView from 'lottie-react-native';
import { responsive } from '../../utils/responsive';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../../redux/actions/cartActions';
import styles from './styles';

/**
 * DeliveryStatus Component
 * Displays current delivery status details and rider information
 *
 * - Delivery status (Arrival time estimate, animation)
 * - Rider identification (Name, role, avatar)
 * - Actions (Dismiss delivery details)
 *
 * Used in: DeliveryScreen
 */
const DeliveryStatus = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(emptyCart());
        navigation.navigate(SCREENS.HOME);
    };

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
                <View>
                    <Text style={styles.estimatedTitle}>Tahmini Varış</Text>
                    <Text style={styles.estimatedTime}>20-30 Dakika</Text>
                    <Text style={styles.statusText}>Siparişiniz yolda!</Text>
                </View>
                <LottieView
                    source={require('../../../assets/animations/DeliveryBike.json')}
                    style={styles.deliveryImage}
                    autoPlay
                    loop
                />
            </View>

            {/* Rider Info Bar */}
            <View style={styles.riderBar}>
                <View style={styles.riderImageContainer}>
                    <Image
                        source={require('../../../assets/images/delivery.png')}
                        style={styles.riderAvatar}
                    />
                </View>
                <View style={styles.riderDetails}>
                    <Text style={styles.riderName}>Doğukan Süme</Text>
                    <Text style={styles.riderTitle}>Kuryeniz</Text>
                </View>
                <View style={styles.riderActions}>
                    <Pressable
                        onPress={handleClose}
                        style={styles.actionButton}
                    >
                        <Icon.X stroke={COLORS.RED} strokeWidth={4} width={responsive.number(24)} height={responsive.number(24)} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default DeliveryStatus;
