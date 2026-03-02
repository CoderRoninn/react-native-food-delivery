import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import { COLORS, BG_COLORS } from '../../const/design/theme';

const styles = StyleSheet.create({
    container: {
        marginRight: responsive.number(24),
        backgroundColor: COLORS.WHITE,
        borderRadius: responsive.number(24),
        shadowColor: BG_COLORS.BG_COLOR(1),
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
    },
    image: {
        height: responsive.number(144),
        width: responsive.number(256),
        borderTopLeftRadius: responsive.number(24),
        borderTopRightRadius: responsive.number(24),
    },
    contentContainer: {
        paddingHorizontal: responsive.number(12),
        paddingBottom: responsive.number(16),
        gap: responsive.number(8),
    },
    name: {
        fontSize: responsive.fontSize(18),
        fontWeight: 'bold',
        paddingTop: responsive.number(8),
        color: COLORS.GRAY_800,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsive.number(4),
    },
    starIcon: {
        height: responsive.number(16),
        width: responsive.number(16),
    },
    ratingText: {
        fontSize: responsive.fontSize(12),
    },
    ratingValue: {
        fontSize: responsive.fontSize(12),
        color: COLORS.GREEN_700,
    },
    ratingType: {
        fontSize: responsive.fontSize(12),
        fontWeight: '600',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsive.number(4),
    },
    address: {
        fontSize: responsive.fontSize(12),
        color: COLORS.GRAY_700,
    },
});

export default styles;

