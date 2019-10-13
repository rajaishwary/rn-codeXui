import React from "react";
import { Provider } from "react-redux";
import RootContainer from "./root";
import createStore from "./store";

export const store = createStore();
console.log(store, "init");
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;