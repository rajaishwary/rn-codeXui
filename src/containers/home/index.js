import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class Home extends React.Component {
  render() {
    console.log(this.props.list);
    return (
      <View>
        <Text>{'Home Container'}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.list
  }
};
const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(Home);
