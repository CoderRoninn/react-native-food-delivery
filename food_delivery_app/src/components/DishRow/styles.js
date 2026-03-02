import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import { COLORS, BG_COLORS } from '../../const/design/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE,
        padding: responsive.number(12),
        borderRadius: responsive.number(24),
        marginBottom: responsive.number(12),
        marginHorizontal: responsive.number(8),
        borderWidth: 1,
        borderColor: BG_COLORS.BG_COLOR(0.3),
        // Shadow for iOS
        shadowColor: BG_COLORS.BG_COLOR(1),
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        // Elevation for Android
        elevation: 8,
    },
    image: {
        height: responsive.number(100),
        width: responsive.number(100),
        borderRadius: responsive.number(24),
    },
    textContainer: {
        flex: 1,
    },
    contentWrapper: {
        paddingLeft: responsive.number(12),
        gap: responsive.number(4),
    },
    title: {
        fontSize: responsive.fontSize(20),
        color: COLORS.GRAY_800,
        fontWeight: 'bold',
    },
    description: {
        fontSize: responsive.fontSize(14),
        color: COLORS.GRAY_700,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: responsive.number(12),
        alignItems: 'center',
        marginTop: responsive.number(8),
    },
    priceText: {
        fontSize: responsive.fontSize(18),
        color: COLORS.GRAY_700,
        fontWeight: 'bold',
    },
    controlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButton: {
        padding: responsive.number(8),
        borderRadius: responsive.number(999),
        backgroundColor: BG_COLORS.BG_COLOR(1),
    },
    quantityText: {
        fontSize: responsive.fontSize(16),
        fontWeight: 'bold',
        paddingHorizontal: responsive.number(12),
        color: COLORS.GRAY_800,
    },
});








