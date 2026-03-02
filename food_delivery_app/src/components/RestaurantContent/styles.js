import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import { COLORS } from '../../const/design/theme';

export const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: responsive.number(40),
        borderTopRightRadius: responsive.number(40),
        backgroundColor: COLORS.WHITE,
        marginTop: responsive.number(-48),
        paddingTop: responsive.number(24),
    },
    infoContainer: {
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
    ratingDetail: {
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
    ratingCategory: {
        fontSize: responsive.fontSize(12),
        fontWeight: '600',
    },
    locationDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsive.number(4),
    },
    addressText: {
        fontSize: responsive.fontSize(12),
        color: COLORS.GRAY_700,
    },
    descriptionText: {
        color: COLORS.GRAY_500,
        marginTop: responsive.number(8),
    },
    menuSection: {
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
