import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import RestaurantCard from '../RestaurantCard';
import styles from './styles';

/**
 * FeaturedRow Component
 * Displays a featured section with title, description, and horizontal scroll of restaurants
 *
 * - Title and description header with "See All" button
 * - Horizontal ScrollView with restaurant items
 * - Each restaurant displays as a RestaurantCard component
 * - Maps over restaurants array to render multiple cards
 *
 * Used in: Features
 */

const FeaturedRow = ({ title, restaurants, description }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <Pressable style={styles.seeAllButton}>
                    <Text style={styles.seeAllText}>Hepsini Gör</Text>
                </Pressable>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
            >
                {restaurants.map((restaurant, index) => (
                    <RestaurantCard
                        item={restaurant}
                        key={index}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;

