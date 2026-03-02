import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { COLORS } from '../../const/design/theme';
import styles from './styles';

/**
 * Map Component
 * Displays a restaurant's location on a map
 * 
 * - Sets initial region based on restaurant coordinates
 * - Shows a marker for the restaurant location
 * - Using standard map type with themed red pin color
 *
 * Used in: DeliveryScreen
 */
const Map = ({ restaurant }) => {
    return (
        <View style={styles.mapContainer}>
            <MapView
                initialRegion={{
                    latitude: restaurant.lat, // North south location
                    longitude: restaurant.lng, // East west location
                    latitudeDelta: 0.002,  // Closer vertical zoom (smaller number = closer)
                    longitudeDelta: 0.002, // Closer horizontal zoom
                }}
                style={styles.map}
                mapType="standard"
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    pinColor={COLORS.RED} // To select the color of marker
                />
            </MapView>
        </View>
    );
};

export default Map;
