import React, { useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../const/screens';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OrderPreparationScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        // Navigate to the delivery screen after 3.5 seconds
        const timer = setTimeout(() => {
            navigation.navigate(SCREENS.DELIVERY);
        }, 3500);
        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
            <View style={styles.animationContainer}>
                <LottieView
                    source={require('../../../assets/animations/FoodAnimation.json')}
                    style={styles.image}
                    autoPlay // To start the animation
                    loop // To repeat the animation
                />
            </View>
        </SafeAreaView>
    );
};

export default OrderPreparationScreen;