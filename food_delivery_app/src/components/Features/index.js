import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { getFeaturedRestaurants } from '../../api';
import FeaturedRow from '../FeaturedRow';
import styles from './styles';

/**
 * Features Component
 * Displays multiple featured restaurant rows
 * 
 * - Fetches featured categories from Sanity API
 * - Maps over featured items array
 * - Each item renders a FeaturedRow component
 * - Shows title, description, and restaurants for each featured section
 *
 * Used in: HomeScreen
 */

const Features = () => {
    const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

    useEffect(() => {
        getFeaturedRestaurants().then(data => {
            setFeaturedRestaurants(data);
        });
    }, []);

    return (
        <View style={styles.container}>
            {featuredRestaurants.map((item, index) => {
                return (
                    <FeaturedRow
                        key={index}
                        title={item.name} // Maps to 'name' field in Sanity schema
                        restaurants={item.restaurants}
                        description={item.description}
                    />
                )
            })}
        </View>
    )
}

export default Features;

