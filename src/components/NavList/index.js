import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Text, Button } from 'src/components';
import { styles } from './styles';
import { colors } from 'src/theme/colors';

class NavList extends Component {
  get isValidList() {
    const { list } = this.props;
    return Array.isArray(list) && list.length > 0;
  }

  handleOnPress = item => {
    const { route } = item;
    console.log(route);
  };

  render() {
    const { list } = this.props;
    return this.isValidList ? (
      <View>
        {list.map(item => {
          <Button onPress={() => this.handleOnPress(item)}>{item.name}</Button>;
        })}
      </View>
    ) : null;
  }
}

export default NavList;
