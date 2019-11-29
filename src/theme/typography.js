import React from 'react';
import { StyleSheet, PixelRatio } from 'react-native';
import { colors } from 'src/theme/colors';

/*
[fontsize-fontweight-color-fontfamily]
h1-regular-light,
h1-bold-dark-primaryFont,
*/

export const fonts = {
  primaryFont: 'SulphurPoint-Regular',
  primaryFontLight: 'SulphurPoint-Light',
  primaryFontBold: 'SulphurPoint-Bold',
};

export const fontSize = {
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 22,
  body1: 18,
  body2: 16,
  body3: 14,
  body4: 12,
};

export const fontWeight = {
  regular: '400',
  medium: '500',
  bold: 'bold',
};

export const defaultTextStyles = {
  fontSize: fontSize['body1'],
  fontWeight: fontWeight['regular'],
  fontFamily: fonts.primaryFont,
  color: colors.primaryText,
};

export function getTextStyles(styleTags) {
  if (styleTags && typeof styleTags === 'string') {
    const parts = styleTags.split('-');
    return {
      fontSize: Boolean(parts[0]) ? fontSize[parts[0]] : fontSize['body1'],
      fontWeight: Boolean(parts[1]) ? fontWeight[parts[1]] : fontWeight['regular'],
      color: Boolean(parts[2])
        ? parts[2] === 'light'
          ? colors.secondaryText
          : colors.primaryText
        : colors.primaryText,
      fontFamily: Boolean(parts[3]) ? fonts[parts[3]] : fonts.primaryFont,
    };
  }
  return defaultTextStyles;
}
