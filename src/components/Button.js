import React, { Component } from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'src/components';
import { colors } from 'src/theme/colors';


const { width, height } = Dimensions.get('window');

const BgColor = {
  primary: {
    background: colors.primary,
    color: 'white',
    borderColor: colors.primary,
  },
  darkPrimary: {
    color: 'white',
    background: colors.darkPrimary,
    borderColor: colors.darkPrimary,
  },
  lightPrimary: {
    color: 'white',
    background: colors.lightPrimary,
    borderColor: colors.lightPrimary,
  },
  primaryText: {
    color: 'white',
    background: colors.primaryText,
    borderColor: colors.primaryText,
  },
  accent: {
    color: 'white',
    background: colors.accent,
    borderColor: colors.accent,
  },
  secondaryText: {
    color: 'white',
    background: colors.secondaryText,
    borderColor: colors.secondaryText,
  },
  divider: {
    color: 'white',
    background: colors.divider,
    borderColor: colors.divider,
  },
  disabled: {
    background: colors.disabled,
    color: '#A7A7A7',
    borderColor: '#e4e4e4',
  },
};

const ButtonTextColor = {
  primary: {
    color: colors.primary,
  },
  darkPrimary: {
    color: colors.darkPrimary,
  },
  lightPrimary: {
    color: colors.lightPrimary,
  },
  primaryText: {
    color: colors.primaryText,
  },
  accent: {
    color: colors.accent,
  },
  secondaryText: {
    color: colors.secondaryText,
  },
  divider: {
    color: colors.divider,
  },
  disabled: {
    color: '#A7A7A7',
  },
};

const OutLine = {
  background: 'transparent',
  borderColor: '#A9A9A9',
  borderWidth: 1,
};

const Size = {
  full: width,
  medium: width / 2,
  small: width / 3,
};

class Button extends Component {
  includeHash = value => {
    return value.includes('#') ? value : ButtonTextColor[value].color;
  };

  render() {
    const {
      text = 'Button',
      theme,
      round = true,
      outLine,
      textColor,
      disabled = false,
      size = '100%',
      fontSize = 18,
    } = this.props;
    console.log(this.props);

    return (
      <TouchableOpacity
        style={{
          backgroundColor: theme ? BgColor[theme].background : outLine ? OutLine.background : 'transparent',
          padding: 10,
          borderColor: theme ? BgColor[theme].borderColor : outLine ? OutLine.borderColor : 'transparent',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: round ? 30 : 5,
          width: size ? Size[size] : size,
          marginVertical: 5,
        }}>
        <Text
          style={{
            color: textColor ? this.includeHash(textColor) : theme ? BgColor[theme].color : '#000',
            fontSize: fontSize,
          }}>{`${text}`}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
