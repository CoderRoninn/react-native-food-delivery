import React from 'react';
import { View, Text, Image } from 'react-native';
import * as Icon from 'react-native-feather';
import DishRow from '../DishRow';
import { COLORS } from '../../const/design/theme';
import { responsive } from '../../utils/responsive';
import { styles } from './styles';

/**
 * RestaurantContent Component
 * Combines restaurant information and the menu list into a single container
 *
 * - Restaurant Details Section (Name, Stars, Reviews, Category, Address, Description)
 * - Menu List Section (Displays a list of DishRow items)
 * - Uses a consistent white container with rounded top corners
 *
 * Used in: RestaurantScreen
 */
const RestaurantContent = ({ item }) => {

    return (
        <View style={styles.container}>
            {/* Restaurant Details Section */}
            <View style={styles.infoContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <View style={styles.ratingRow}>
                    <View style={styles.ratingDetail}>
                        <Image
                            source={require('../../../assets/images/starIcon.png')}
                            style={styles.starIcon}
                        />
                        <Text style={styles.ratingText}>
                            <Text style={styles.ratingValue}>{item.rating}</Text>
                            <Text style={styles.ratingValue}>({item.reviews} değerlendirme).
                                <Text style={styles.ratingCategory}>{item.type?.name}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.locationDetail}>
                        <Icon.MapPin
                            color={COLORS.GRAY_500}
                            width={responsive.number(15)}
                            height={responsive.number(15)}
                        />
                        <Text style={styles.addressText}>
                            {item.address} yakınında.
                        </Text>
                    </View>
                </View>
                <Text style={styles.descriptionText}>{item.description}</Text>
            </View>

            {/* Menu List Section */}
            <View style={styles.menuSection}>
                <Text style={styles.menuTitle}>Menü</Text>
                {item.dishes?.map((dish, index) => (
                    <DishRow key={index} item={{ ...dish }} />
                ))}
            </View>
        </View>
    );
};


export default RestaurantContent;
