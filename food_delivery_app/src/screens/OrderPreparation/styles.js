import { StyleSheet } from 'react-native';
import { COLORS, BG_COLORS } from '../../const/design/theme';
import { responsive } from '../../utils/responsive';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    },
    animationContainer: {
        flex: 1,
        backgroundColor: BG_COLORS.BG_COLOR(0.75),
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: responsive.number(350),
        height: responsive.number(350),
    },
});
