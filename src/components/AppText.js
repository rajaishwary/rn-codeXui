import React from 'react';
import { Text } from 'react-native';
import config from 'src/config';
import { getTextStyles, defaultTextStyles } from 'src/theme/typography';

/*
text styles syntax:
[fontsize-fontweight-color-fontfamily]
eg. h1-regular-light,
*/

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
    if (typeof this.props.selectable === 'boolean') {
      return this.props.selectable;
    }
    if (config.textSelectable) {
      return config.textSelectable;
    }
    return false;
  }

  render() {
    const styles = this.props.style && typeof this.props.style === 'string' ? getTextStyles(this.props.style) : {
      ...this.props.style,
      ...defaultTextStyles
    };

    return (
      <Text
        {...this.props}
        style={styles}
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
