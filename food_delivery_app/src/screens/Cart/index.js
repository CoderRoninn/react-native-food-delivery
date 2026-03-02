import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../../../redux/selectors/restaurantSelectors';
import CartTopDetails from '../../components/CartTopDetails';
import CartDishList from '../../components/CartDishList';
import CartTotals from '../../components/CartTotals';
import { styles } from './styles';

export default function CartScreen() {
    const restaurant = useSelector(selectRestaurant);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <CartTopDetails restaurantName={restaurant?.name} />
            <CartDishList />
            <CartTotals />
        </SafeAreaView>
    );
}
