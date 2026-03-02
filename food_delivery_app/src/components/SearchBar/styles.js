import { StyleSheet } from 'react-native';
import { COLORS, BG_COLORS } from '../../const/design/theme';
import { responsive } from '../../utils/responsive';

export const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsive.number(16),
    paddingBottom: responsive.number(8),
    columnGap: responsive.number(8),
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsive.number(12),
    borderRadius: responsive.number(999),
    borderWidth: responsive.number(1),
    borderColor: COLORS.BORDER_LIGHT,
  },
  searchInput: {
    marginLeft: responsive.number(8),
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: responsive.number(4),
    paddingLeft: responsive.number(8),
    borderLeftWidth: responsive.number(2),
    borderLeftColor: COLORS.BORDER_LIGHT,
    borderWidth: 0,
  },
  locationText: {
    color: COLORS.GRAY_DARK,
  },
  filterButton: {
    padding: responsive.number(12),
    borderRadius: responsive.number(999),
    backgroundColor: BG_COLORS.BG_COLOR(1),
  },
});

