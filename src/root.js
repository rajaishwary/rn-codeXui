import React from 'react';
import { View, StatusBar } from 'react-native';
import ReduxNavigation from './navigation/reduxNavigation';

class RootContainer extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: 'gray' }}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff"/>
        <ReduxNavigation />
      </View>
    )
  }
}

export default RootContainer;
