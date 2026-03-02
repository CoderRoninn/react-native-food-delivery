/**
 * Design System Theme
 * Contains standardized colors and dynamic background color generators
 */

/**
 * Global Color Palette
 */
export const COLORS = {
  WHITE: '#FFFFFF',
  GRAY: '#9CA3AF',
  GRAY_200: '#E5E7EB',
  GRAY_500: '#6B7280',
  GRAY_600: '#4B5563',
  GRAY_700: '#374151',
  GRAY_800: '#1F2937',
  BORDER_LIGHT: '#D1D5DB',
  GRAY_DARK: '#4B5563',
  ORANGE: '#f97316',
  GREEN_700: '#15803d',
  BLACK: '#000000',
  GRAY_50: '#F8F9FA',
  RED: '#EF4444',
};

/**
 * Dynamic Colors with Opacity
 * Simple functions that return rgba colors based on provided opacity
 */
export const BG_COLORS = {
  BG_COLOR: (opacity) => `rgba(251, 146, 60, ${opacity})`,
  WHITE_OPACITY: (opacity) => `rgba(255, 255, 255, ${opacity})`,
};




