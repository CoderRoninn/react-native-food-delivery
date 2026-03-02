import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import { COLORS } from '../../const/design/theme';

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    },
    contentContainer: {

        borderTopLeftRadius: responsive.number(40),
        borderTopRightRadius: responsive.number(40),
        backgroundColor: COLORS.WHITE,
        marginTop: responsive.number(-48),
        paddingTop: responsive.number(24),
    },
    nameContainer: {
        paddingHorizontal: responsive.number(20),
    },
    nameText: {
        fontSize: responsive.fontSize(30),
        fontWeight: 'bold',
    },
    ratingRow: {
        flexDirection: 'row',
        gap: responsive.number(8),
        marginVertical: responsive.number(4),
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
    description: {
        color: COLORS.GRAY_500,
        marginTop: responsive.number(8),
    },
    menuContainer: {
        paddingBottom: responsive.number(144),
        backgroundColor: COLORS.WHITE,
    },
    menuTitle: {
        paddingHorizontal: responsive.number(16),
        paddingVertical: responsive.number(16),
        fontSize: responsive.fontSize(24),
        fontWeight: 'bold',
    },
});

export default styles;

