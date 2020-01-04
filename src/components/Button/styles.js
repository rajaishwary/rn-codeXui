import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from 'src/theme/colors';
import { dimensions } from 'src/theme/dimensions';

const commonBtnStyles = {
  width: dimensions.width / 2.5,
  justifyContent: 'center',
  alignItems: 'center',
  padding: dimensions.spacing1,
};

const containerStyles = StyleSheet.create({
  PRIMARY: {
    ...commonBtnStyles,
    backgroundColor: colors.button.PRIMARY.background,
  },
  SECONDARY: {
    ...commonBtnStyles,
    backgroundColor: colors.button.SECONDARY.background,
  },
  OUTLINED: {
    ...commonBtnStyles,
    backgroundColor: colors.button.OUTLINED.background,
  },
});

const txtStyles = StyleSheet.create({
  PRIMARY: {
    color: colors.button.PRIMARY.text,
  },
  SECONDARY: {
    color: colors.button.SECONDARY.text,
  },
  OUTLINED: {
    color: colors.button.OUTLINED.text,
  },
});

export { containerStyles, txtStyles };
