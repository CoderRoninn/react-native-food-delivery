import React from 'react';
import { featured } from '../../../assets/categories';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../../../redux/selectors/restaurantSelectors';
import Map from '../../components/Map';
import DeliveryStatus from '../../components/DeliveryStatus';
import styles from './styles';

const DeliveryScreen = () => {
    const restaurant = useSelector(selectRestaurant);

    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
            <Map restaurant={restaurant} />
            <DeliveryStatus />
        </SafeAreaView>
    );
};

export default DeliveryScreen;
