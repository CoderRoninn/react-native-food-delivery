import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import { COLORS, BG_COLORS } from '../../const/design/theme';

export const styles = StyleSheet.create({
    headerContainer: {
        position: 'relative',
        paddingBottom: responsive.number(12),
        backgroundColor: COLORS.WHITE,
    },
    backButton: {
        position: 'absolute',
        zIndex: 10,
        borderRadius: responsive.number(999),
        padding: responsive.number(8),
        backgroundColor: BG_COLORS.BG_COLOR(1),
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        top: responsive.number(12),
        left: responsive.number(16),
    },
    headerTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: responsive.fontSize(18),
        color: COLORS.BLACK,
    },
    restaurantName: {
        textAlign: 'center',
        color: COLORS.GRAY_500,
        fontSize: responsive.fontSize(14),
    },
    deliveryContainer: {
        flexDirection: 'row',
        paddingHorizontal: responsive.number(16),
        alignItems: 'center',
        backgroundColor: BG_COLORS.BG_COLOR(0.2),
    },
    deliveryImage: {
        width: responsive.number(80),
        height: responsive.number(80),
        borderRadius: responsive.number(40),
    },
    deliveryText: {
        flex: 1,
        paddingLeft: responsive.number(16),
        fontWeight: '500',
        color: COLORS.BLACK,
        fontSize: responsive.fontSize(14),
    },
    changeText: {
        fontWeight: 'bold',
        color: BG_COLORS.BG_COLOR(1),
        fontSize: responsive.fontSize(14),
    },
});
