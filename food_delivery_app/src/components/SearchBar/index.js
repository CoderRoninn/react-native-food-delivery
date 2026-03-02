import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { COLORS } from '../../const/design/theme';
import * as Icon from 'react-native-feather';
import { responsive } from '../../utils/responsive';
import { styles } from './styles';

/**
 * SearchBar Component
 * Displays a horizontal search input with location info and filter button
 *
 * - Search icon + text input for restaurant search
 * - Current location label with map pin icon
 * - Filter button on the right for advanced search options
 *
 * Used in: HomeScreen
 */

const SearchBar = () => {
  return (
    <View style={styles.headerRow}>
      <View style={styles.searchBar}>
        <Icon.Search
          height={responsive.number(26)}
          width={responsive.number(26)}
          color={COLORS.GRAY}
        />
        <TextInput
          placeholder="Restoranlar"
          style={styles.searchInput}
        />
        <View style={styles.locationContainer}>
          <Icon.MapPin
            height={responsive.number(26)}
            width={responsive.number(26)}
            color={COLORS.GRAY}
          />
          <Text style={styles.locationText}>Kayapınar, DİY</Text>
        </View>
      </View>
      <View style={styles.filterButton}>
        <Icon.Sliders
          height={responsive.number(20)}
          width={responsive.number(20)}
          strokeWidth={responsive.number(2.5)}
          color={COLORS.WHITE}
        />
      </View>
    </View>
  );
};

export default SearchBar;

