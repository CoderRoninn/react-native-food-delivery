import { StyleSheet } from 'react-native';
import { COLORS, BG_COLORS } from '../../const/design/theme';
import { responsive } from '../../utils/responsive';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.WHITE,
        paddingVertical: responsive.number(4),
    },
    pressable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: responsive.number(20),
        borderRadius: responsive.number(999),
        backgroundColor: BG_COLORS.BG_COLOR(1),
        paddingHorizontal: responsive.number(16),
        paddingVertical: responsive.number(12),
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
    },
    badgeText: {
        fontWeight: '800',
        color: COLORS.WHITE,
        fontSize: responsive.fontSize(16),
    },
    badgeContainer: {
        backgroundColor: BG_COLORS.WHITE_OPACITY(0.3),
        padding: responsive.number(6),
        paddingHorizontal: responsive.number(10),
        borderRadius: responsive.number(999),
    },
    cartText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.WHITE,
        fontSize: responsive.fontSize(18),
    },
    priceText: {
        fontWeight: '800',
        color: COLORS.WHITE,
        fontSize: responsive.fontSize(18),
    },
});



export default styles;
