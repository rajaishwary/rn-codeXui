import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, Text } from 'react-native';
import { COMPONENT } from './constants';
import reducer from './reducer';
import saga from './saga';
import { selectHomeList } from './selector';
import utils from '@utils';

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

const mapStateToProps = createStructuredSelector({
  list: selectHomeList(),
});
const withConnect = connect(mapStateToProps);
const withDyno = utils.withDyno({ key: COMPONENT, reducer, saga });


export default compose(
  withDyno,
  withConnect,
)(Home);
