import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import * as Icon from 'react-native-feather';
import { styles } from './styles';
import { urlFor } from '../../api/sanity';
import { COLORS } from '../../const/design/theme';
import { responsive } from '../../utils/responsive';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/actions/cartActions';
import { selectCartItemsById } from '../../../redux/selectors/cartSelectors';

/**
 * DishRow Component
 * Displays a single dish item in a row format with image, details, and quantity controls
 *
 * - Dish image with rounded corners
 * - Dish name and description
 * - Price display
 * - Quantity controls (Minus/Plus buttons) with current count
 * - Uses responsive scaling for all elements
 *
 * Used in: RestaurantContent
 */
const DishRow = ({ item }) => {
    // Call dispatch to dispatch actions
    const dispatch = useDispatch();
    // Call selector to get items by id
    const totalItems = useSelector(state => selectCartItemsById(state, item._id));
    // Handle increase
    const handleIncrease = () => {
        dispatch(addToCart({ ...item }));
    };
    // Handle decrease
    const handleDecrease = () => {
        dispatch(removeFromCart(item._id));
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: urlFor(item.image).url() }}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <View style={styles.contentWrapper}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
                <View style={styles.priceRow}>
                    <Text style={styles.priceText}>
                        {item.price} TL
                    </Text>
                    <View style={styles.controlsContainer}>
                        <Pressable
                            onPress={handleDecrease}
                            disabled={!totalItems.length} // Disable if no items in cart
                            style={styles.actionButton}
                        >
                            <Icon.Minus
                                stroke={COLORS.WHITE}
                                strokeWidth={3}
                                width={responsive.number(18)}
                                height={responsive.number(18)}
                            />
                        </Pressable>
                        <Text style={styles.quantityText}>{totalItems.length}</Text>
                        <Pressable
                            onPress={handleIncrease}
                            style={styles.actionButton}
                        >
                            <Icon.Plus
                                stroke={COLORS.WHITE}
                                strokeWidth={3}
                                width={responsive.number(18)}
                                height={responsive.number(18)}
                            />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default DishRow;