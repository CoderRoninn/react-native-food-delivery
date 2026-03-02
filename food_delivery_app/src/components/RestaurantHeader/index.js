import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BG_COLORS } from '../../const/design/theme';
import { responsive } from '../../utils/responsive';
import * as Icon from 'react-native-feather';
import styles from './styles';
import { urlFor } from '../../api/sanity';

/**
 * RestaurantHeader Component
 * Displays restaurant image header with back navigation button
 *
 * - Full-width restaurant image display
 * - Back button overlay positioned at top-left
 * - Circular back button with shadow styling
 * - Navigates back to previous screen on press
 *
 * Used in: RestaurantScreen
 */

const RestaurantHeader = ({ image }) => {
    const navigation = useNavigation(); // get the navigation object

    return (
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{ uri: urlFor(image).url() }}
            />
            <Pressable
                onPress={() => navigation.goBack()}
                style={styles.backButton}>
                <Icon.ArrowLeft strokeWidth={responsive.number(3)} color={BG_COLORS.BG_COLOR(1)} />
            </Pressable>
        </View>
    );
};

export default RestaurantHeader;

