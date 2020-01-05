import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Platform, StyleSheet } from 'react-native';
import { Text, LGradient } from 'src/components';
import { commonBtnStyles, containerStyles, txtStyles, roundedStyles, lgStyles } from './styles';
import { colors } from 'src/theme/colors';

export const buttonTypes = {
  primary: 'PRIMARY',
  secondary: 'SECONDARY',
  outlined: 'OUTLINED',
  danger: 'DANGER',
};

class Button extends React.PureComponent {
  static type = buttonTypes;

  get platformSpecificProps() {
    return Platform.OS === 'android' ? { background: TouchableNativeFeedback.SelectableBackground() } : {};
  }

  get btnContainerStyles() {
    const type = this.props.type || buttonTypes.primary;
    return containerStyles[type];
  }

  get btnTxtStyles() {
    const type = this.props.type || buttonTypes.primary;
    return txtStyles[type];
  }

  get btnText() {
    const { children, text } = this.props;
    if (Boolean(text)) return text;
    if (Boolean(children)) return children;
    return 'Submit';
  }

  get extraBtnSpecs() {
    const { linearGradient } = this.props;
    const type = this.props.type || buttonTypes.primary;
    const btn = <Text style={{ ...this.btnTxtStyles, ...this.props.txtStyles }}>{this.btnText}</Text>;
    if (Boolean(linearGradient)) {
      return (
        <LGradient style={StyleSheet.flatten([commonBtnStyles, { width: '100%', margin: 0 }])} colors={colors.button[type].linearGradient}>
          <View>{btn}</View>
        </LGradient>
      );
    }
    return btn;
  }

  render() {
    const { rounded, linearGradient } = this.props;
    const Btn = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    let btnStyles = StyleSheet.flatten([this.btnContainerStyles, this.props.style]);
    if (rounded) btnStyles = StyleSheet.flatten([btnStyles, roundedStyles]);
    if (linearGradient) btnStyles = StyleSheet.flatten([btnStyles, lgStyles]);
    return (
      <Btn {...this.platformSpecificProps} style={btnStyles} onPress={this.props.onPress}>
        {this.extraBtnSpecs}
      </Btn>
    );
  }
}

export default Button;
