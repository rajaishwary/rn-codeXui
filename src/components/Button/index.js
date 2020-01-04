import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { Text } from 'src/components';
import { containerStyles, txtStyles, roundedStyles } from './styles';

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

  render() {
    const Btn = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    const btnStyles = [this.btnContainerStyles, this.props.style];
    if (this.props.rounded) btnStyles.push(roundedStyles);
    return (
      <Btn {...this.platformSpecificProps} style={btnStyles} onPress={this.props.onPress}>
        <Text style={{ ...this.btnTxtStyles, ...this.props.txtStyles }}>{this.btnText}</Text>
      </Btn>
    );
  }
}

export default Button;
