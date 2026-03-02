import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { getCategories } from '../../api';
import Category from '../Category';
import styles from './styles';

/**
 * Categories Component
 * Displays a horizontal scrollable list of food categories
 *
 * - Horizontal ScrollView with category items
 * - Active category state management
 * - Each category displays image and name
 * - Clickable categories with active/inactive styling
 *
 * Used in: HomeScreen
 */

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(null); // State to manage the active category
    const [categories, setCategories] = useState([]); // State to store categories from API

    useEffect(() => {
        getCategories().then(data => {
            setCategories(data);
        });
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            >
                {
                    categories.map((category, index) => {
                        const isActive = category._id === activeCategory; // Check if the category is active

                        return (
                            <Category
                                key={index}
                                category={category}
                                isActive={isActive}
                                onPress={() => setActiveCategory(category._id)}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Categories;