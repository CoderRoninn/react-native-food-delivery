import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';

const styles = StyleSheet.create({
    container: {
        marginTop: responsive.number(6),
    },
    contentContainer: {
        paddingHorizontal: responsive.number(15),
    },
});

export default styles;

