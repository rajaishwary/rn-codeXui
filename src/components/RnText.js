import React from 'react';
import { Text } from 'react-native';

class RnText extends React.PureComponent {

  get text() {
    const { text, children } = this.props;
    if (children && typeof children === 'string') {
      return children;
    } else if (text && typeof text === 'string') {
      return text;
    } else {
      return '';
    }
  }

  render() {
    return <Text>{this.text}</Text>;
  }
}

export default RnText;