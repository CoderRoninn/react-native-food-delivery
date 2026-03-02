import React from 'react';
import { View, Pressable, Image, Text } from 'react-native';
import { urlFor } from '../../api/sanity';
import styles from './style';

/**
 * Category Component
 * Displays a single category item with image and name
 *
 * - Circular pressable button with category image
 * - Category name text below the button
 * - Active state styling (background color and text weight)
 * - Handles category selection via onPress callback
 *
 * Used in: Categories
 */

const Category = ({ category, isActive, onPress }) => {
    return (
        <View style={styles.categoryItem}>
            <Pressable
                onPress={onPress}
                style={[
                    styles.pressable,
                    isActive && styles.pressableActive
                ]}
            >
                <Image source={{ uri: urlFor(category.image).url() }} style={styles.image} />

            </Pressable>

            <Text style={[
                styles.text,
                isActive ? styles.textActive : styles.textInactive
            ]}>
                {category.name}
            </Text>
        </View>
    )
}

export default Category;

