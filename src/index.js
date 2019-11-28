import React from "react";
import { Provider } from "react-redux";
import RootContainer from "./root";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store()}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;