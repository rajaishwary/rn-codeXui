import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { Text } from 'src/components';
import { colors } from 'src/theme/colors';
import { containerStyles, txtStyles } from './styles';

export const buttonTypes = {
  primary: 'PRIMARY',
  secondary: 'SECONDARY',
  outlined: 'OUTLINED',
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

  render() {
    const Btn = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
      <Btn {...this.platformSpecificProps} style={[this.btnContainerStyles, this.props.style]} onPress={this.props.onPress}>
        <Text style={{ ...this.btnTxtStyles, ...this.props.txtStyles }}>{this.btnText}</Text>
      </Btn>
    );
  }
}

export default Button;
