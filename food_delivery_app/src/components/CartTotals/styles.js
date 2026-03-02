import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import { COLORS, BG_COLORS } from '../../const/design/theme';

export const styles = StyleSheet.create({
    totalsContainer: {
        padding: responsive.number(24),
        paddingHorizontal: responsive.number(32),
        borderTopLeftRadius: responsive.number(36),
        borderTopRightRadius: responsive.number(36),
        backgroundColor: BG_COLORS.BG_COLOR(0.2),
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: responsive.number(16),
    },
    subTotalText: {
        color: COLORS.GRAY_700,
        fontSize: responsive.fontSize(16),
    },
    totalTextBold: {
        color: COLORS.GRAY_700,
        fontWeight: '900',
        fontSize: responsive.fontSize(16),
    },
    orderButton: {
        padding: responsive.number(12),
        borderRadius: responsive.number(999),
        backgroundColor: BG_COLORS.BG_COLOR(1),
    },
    orderButtonText: {
        color: COLORS.WHITE,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: responsive.fontSize(18),
    },
});
