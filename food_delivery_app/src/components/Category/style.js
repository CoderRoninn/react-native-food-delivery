import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import { COLORS } from '../../const/design/theme';

const styles = StyleSheet.create({
    categoryItem: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: responsive.number(24),
    },
    pressable: {
        padding: responsive.number(4),
        borderRadius: responsive.number(9999),
        backgroundColor: COLORS.GRAY_200,
    },
    pressableActive: {
        backgroundColor: COLORS.GRAY_600,
    },
    image: {
        width: responsive.number(45),
        height: responsive.number(45),
    },
    text: {
        fontSize: responsive.fontSize(14),
    },
    textActive: {
        fontWeight: '600',
        color: COLORS.GRAY_800,
    },
    textInactive: {
        color: COLORS.GRAY_500,
    },
});

export default styles;

