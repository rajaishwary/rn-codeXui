import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class Home extends React.Component {
  render() {
    console.log(this.props.nav);
    return (
      <View>
        <Text>{'Home Container'}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { nav: state.navigation };
}

export default connect(mapStateToProps)(Home);
