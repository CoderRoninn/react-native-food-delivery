import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import { COLORS } from '../../const/design/theme';

const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: responsive.number(288),
    },
    backButton: {
        position: 'absolute',
        top: responsive.number(56),
        left: responsive.number(16),
        backgroundColor: COLORS.GRAY_200,
        padding: responsive.number(8),
        borderRadius: 9999,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default styles;

