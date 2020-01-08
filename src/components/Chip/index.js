import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Text } from 'src/components';
import { chipStyle, commonStyle, txtStyle } from './style';
import { colors } from 'src/theme/colors';

class Chip extends Component {
  get chipText() {
    const { text, children } = this.props;
    if (Boolean(text)) {
      return text;
    }
    if (Boolean(children)) {
      return children;
    }
    return 'Chip Text';
  }

  get chipContainerStyle() {
    const { disabled } = this.props;
    let type = this.props.type || 'flat';
    if (Boolean(disabled)) {
      return {
        ...chipStyle[type],
        opacity: 0.8,
      };
    }
    return chipStyle[type];
  }

  get txtStyle() {
    const { disabled } = this.props;
    let type = this.props.type || 'flat';
    if (Boolean(disabled)) {
      return {
        ...txtStyle[type],
        color: colors.black,
        opacity: 0.4,
      };
    }
    return txtStyle[type];
  }

  get extraChipSpec() {
    const { onClick } = this.props;
    let txtStyle = StyleSheet.flatten([this.txtStyle, this.props.txtStyle]);
    let chipText = <Text style={txtStyle}>{this.chipText}</Text>;
    if (Boolean(onClick)) {
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          {chipText}
          <TouchableWithoutFeedback>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 50,
                backgroundColor: colors.darkSilver,
                marginLeft: 10,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Text style={{fontSize:15, color:colors.white}}>{'x'}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    }

    return chipText;
  }

  get disabledStyle() {
    const { disabled } = this.props;
    if (Boolean(disabled)) {
      return chipStyle[disabled];
    }
  }

  render() {
    let chipContainerStyle = StyleSheet.flatten([this.chipContainerStyle, this.props.containerStyle]);
    return <View style={chipContainerStyle}>{this.extraChipSpec}</View>;
  }
}

export default Chip;
