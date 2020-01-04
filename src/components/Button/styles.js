import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from 'src/theme/colors';
import { dimensions } from 'src/theme/dimensions';

const commonBtnStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  padding: dimensions.spacing2,
  margin: dimensions.spacing1,
};

const commonTxtStyles = {
  fontSize: 20,
  fontWeight: '800'
};

const roundedStyles = {
  height: 40,
  borderRadius: 20
}

const containerStyles = StyleSheet.create({
  PRIMARY: {
    ...commonBtnStyles,
    width: '60%',
    backgroundColor: colors.button.PRIMARY.background,
  },
  SECONDARY: {
    ...commonBtnStyles,
    backgroundColor: colors.button.SECONDARY.background,
  },
  OUTLINED: {
    ...commonBtnStyles,
    backgroundColor: colors.button.OUTLINED.background,
    borderWidth: 2,
    borderColor: colors.button.OUTLINED.text,
  },
  DANGER: {
    ...commonBtnStyles,
    backgroundColor: colors.button.DANGER.background,
  }
});

const txtStyles = StyleSheet.create({
  PRIMARY: {
    ...commonTxtStyles,
    color: colors.button.PRIMARY.text,
  },
  SECONDARY: {
    ...commonTxtStyles,
    color: colors.button.SECONDARY.text,
  },
  OUTLINED: {
    ...commonTxtStyles,
    color: colors.button.OUTLINED.text,
  },
  DANGER: {
    ...commonTxtStyles,
    color: colors.button.DANGER.text,
  },
});

export { containerStyles, txtStyles, roundedStyles };
