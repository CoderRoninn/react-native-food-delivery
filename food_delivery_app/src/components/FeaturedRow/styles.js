import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import { COLORS } from '../../const/design/theme';

const styles = StyleSheet.create({
    container: {
        marginTop: responsive.number(5),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsive.number(16),
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: responsive.fontSize(18),
        fontWeight: 'bold',
        color: COLORS.GRAY_800,
        marginBottom: responsive.number(4),
    },
    description: {
        fontSize: responsive.fontSize(12),
        color: COLORS.GRAY_500,
    },
    seeAllButton: {
        paddingVertical: responsive.number(4),
        paddingHorizontal: responsive.number(8),
    },
    seeAllText: {
        fontSize: responsive.fontSize(14),
        fontWeight: '600',
        color: COLORS.ORANGE,
    },
    scrollView: {
        paddingVertical: responsive.number(20),
    },
    scrollContent: {
        paddingHorizontal: responsive.number(15),
    },
});

export default styles;

