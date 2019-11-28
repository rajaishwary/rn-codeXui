import React from 'react';
import { Text } from 'react-native';
import config from 'src/config';

class AppText extends React.PureComponent {
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

  get maxLimitProps() {
    return this.props.numberOfLines && typeof this.props.numberOfLines === 'number'
      ? {
          ellipsizeMode: this.props.ellipsizeMode || 'tail',
          numberOfLines: this.props.numberOfLines || 3,
        }
      : {};
  }

  get canCopyText() {
    if (!config.textSelectable && !typeof this.props.selectable === 'boolean') {
      return config.textSelectable;
    }
    if (typeof this.props.selectable === 'boolean') {
      return this.props.selectable;
    }
    return true;
  }

  render() {
    return (
      <Text
        {...this.props}
        accessible={true}
        accessibilityLabel={this.text}
        accessibilityRole={'text'}
        adjustsFontSizeToFit={true} //iOS
        allowFontScaling={false}
        {...this.maxLimitProps}
        selectable={this.canCopyText}
      >
        {this.text}
      </Text>
    );
  }
}

export default AppText;
