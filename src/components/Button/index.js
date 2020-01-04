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

  render() {
    const Btn = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
      <Btn {...this.platformSpecificProps}>
        <View style={[this.btnContainerStyles, this.props.style]}>
          <Text style={{ ...this.btnTxtStyles, ...this.props.txtStyles }}>{'Button'}</Text>
        </View>
      </Btn>
    );
  }
}

export default Button;
