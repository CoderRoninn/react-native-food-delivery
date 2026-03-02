import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import RestaurantScreen from '../screens/Restaurant';
import CartScreen from '../screens/Cart';
import OrderPreparationScreen from '../screens/OrderPreparation';
import DeliveryScreen from '../screens/Delivery';
import { SCREENS } from '../const/screens';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREENS.RESTAURANT} component={RestaurantScreen} />
        <Stack.Screen name={SCREENS.CART}
          component={CartScreen}
          // presentation makes the screen appear as a modal
          // animation makes the screen slide up from the bottom
          options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
        />
        <Stack.Screen name={SCREENS.ORDER_PREPARATION}
          component={OrderPreparationScreen}
          options={{ presentation: 'fullScreenModal' }} />
        <Stack.Screen name={SCREENS.DELIVERY}
          component={DeliveryScreen}
          options={{ presentation: 'fullScreenModal' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default HomeNavigator;


