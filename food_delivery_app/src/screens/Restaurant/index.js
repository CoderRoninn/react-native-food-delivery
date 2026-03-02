import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../../../redux/actions/restaurantActions';
import RestaurantHeader from '../../components/RestaurantHeader';
import RestaurantContent from '../../components/RestaurantContent';
import CartBar from '../../components/CartBar';
import styles from './styles';

/**
 * RestaurantScreen
 * Main screen for showing restaurant details and its menu
 */
const RestaurantScreen = () => {
    // Get restaurant data from route params
    const { params } = useRoute();
    const item = params; // restaurant data
    const dispatch = useDispatch();

    // Save selected restaurant to Redux store when component mounts
    useEffect(() => {
        if (item && item._id) {
            dispatch(setRestaurant({ ...item }));
        }
    }, []);

    return (
        <SafeAreaView edges={['bottom']} style={styles.safeAreaContainer}>
            <StatusBar style="light" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <RestaurantHeader image={item.image} />
                <RestaurantContent item={item} />
            </ScrollView>
            <CartBar />
        </SafeAreaView>

    );
};


export default RestaurantScreen;
