import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import { COLORS, BG_COLORS } from '../../const/design/theme';

export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: COLORS.WHITE,
        paddingTop: responsive.number(20),
    },
    scrollViewContent: {
        paddingBottom: responsive.number(50),
    },
    dishItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: responsive.number(8),
        paddingHorizontal: responsive.number(16),
        backgroundColor: COLORS.WHITE,
        borderRadius: responsive.number(24),
        marginHorizontal: responsive.number(8),
        marginBottom: responsive.number(12),
        borderWidth: 1,
        borderColor: BG_COLORS.BG_COLOR(0.3),
        shadowColor: BG_COLORS.BG_COLOR(1),
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 10,
    },
    dishImage: {
        width: responsive.number(56),
        height: responsive.number(56),
        borderRadius: responsive.number(28),
        marginLeft: responsive.number(12),
    },
    dishName: {
        flex: 1,
        fontWeight: 'bold',
        color: COLORS.GRAY_700,
        paddingLeft: responsive.number(12),
        fontSize: responsive.fontSize(16),
    },
    dishPrice: {
        fontWeight: 'bold',
        fontSize: responsive.fontSize(16),
        color: COLORS.BLACK,
        marginRight: responsive.number(12),
        marginLeft: responsive.number(8),
    },
    qtyActionContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.GRAY_50,
        borderRadius: responsive.number(15),
        paddingVertical: responsive.number(6),
        paddingHorizontal: responsive.number(4),
        height: responsive.number(80),
        marginLeft: responsive.number(8),
    },
    qtyBtn: {
        padding: responsive.number(2),
    },
    qtyText: {
        color: COLORS.BLACK,
        fontWeight: 'bold',
        fontSize: responsive.fontSize(16),
        marginVertical: responsive.number(2),
    },
});
