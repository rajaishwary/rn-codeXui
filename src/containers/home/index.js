import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import HomeView from './views';

class Home extends React.Component {
  render() {
    console.log(this.props.list);
    return (
      <HomeView />
    );
  }
}

const mapStateToProps = ({ home }) => {
  return {
    list: home.list,
  };
};
const withConnect = connect(mapStateToProps);

export default compose(withConnect)(Home);
