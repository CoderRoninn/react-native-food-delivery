import { StyleSheet } from 'react-native';
import { COLORS, BG_COLORS } from '../../const/design/theme';
import { responsive } from '../../utils/responsive';

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: COLORS.WHITE,
        borderTopLeftRadius: responsive.number(30),
        borderTopRightRadius: responsive.number(30),
        marginTop: responsive.number(-50),
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsive.number(20),
        paddingTop: responsive.number(30),
        paddingBottom: responsive.number(15),
    },
    estimatedTitle: {
        fontSize: responsive.fontSize(18),
        color: COLORS.GRAY_700,
        fontWeight: '600',
    },
    estimatedTime: {
        fontSize: responsive.fontSize(30),
        color: COLORS.GRAY_700,
        fontWeight: '800',
    },
    statusText: {
        fontSize: responsive.fontSize(16),
        marginTop: responsive.number(8),
        color: COLORS.GRAY_700,
        fontWeight: '600',
    },
    deliveryImage: {
        width: responsive.number(100),
        height: responsive.number(100),
    },
    riderBar: {
        backgroundColor: BG_COLORS.BG_COLOR(1),
        padding: responsive.number(12),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: responsive.number(40),
        marginHorizontal: responsive.number(8),
        marginBottom: responsive.number(10),
    },
    riderImageContainer: {
        backgroundColor: BG_COLORS.WHITE_OPACITY(0.4),
        padding: responsive.number(4),
        borderRadius: responsive.number(99),
    },
    riderAvatar: {
        width: responsive.number(45),
        height: responsive.number(45),
        borderRadius: responsive.number(99),
    },
    riderDetails: {
        flex: 1,
        marginLeft: responsive.number(12),
    },
    riderName: {
        fontSize: responsive.fontSize(18),
        fontWeight: 'bold',
        color: COLORS.WHITE,
    },
    riderTitle: {
        fontSize: responsive.fontSize(15),
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    riderActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButton: {
        backgroundColor: COLORS.WHITE,
        padding: responsive.number(6),
        borderRadius: responsive.number(99),
        marginLeft: responsive.number(12),
    }
});

export default styles;
