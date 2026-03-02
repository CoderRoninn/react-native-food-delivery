import React from 'react';
import { View, Pressable, Image, Text } from 'react-native';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { COLORS } from '../../const/design/theme';
import { responsive } from '../../utils/responsive';
import { SCREENS } from '../../const/screens';
import { urlFor } from '../../api/sanity';

/**
 * RestaurantCard Component
 * Displays a single restaurant card with image, name, rating, and location
 *
 * - Restaurant image with rounded top corners
 * - Restaurant name and details
 * - Star rating with reviews and category type
 * - Location icon with address information
 * - Pressable card with shadow styling
 * - Navigates to Restaurant screen on press
 *
 * Used in: FeaturedRow
 */

const RestaurantCard = ({ item }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => navigation.navigate(SCREENS.RESTAURANT, { ...item })}
        >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: urlFor(item.image).url() }}
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.name}>
                        {item.name}
                    </Text>
                    <View style={styles.ratingContainer}>
                        <Image
                            source={require('../../../assets/images/starIcon.png')}
                            style={styles.starIcon}
                        />
                        <Text style={styles.ratingText}>
                            <Text style={styles.ratingValue}>{item.rating}</Text>
                            <Text style={styles.ratingValue}>({item.reviews} değerlendirme).
                                <Text style={styles.ratingType}>{item.type?.name}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <Icon.MapPin
                            color={COLORS.GRAY_500}
                            width={responsive.number(15)}
                            height={responsive.number(15)}
                        />
                        <Text style={styles.address}>
                            {item.address} yakınında.
                        </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default RestaurantCard;