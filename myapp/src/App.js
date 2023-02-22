import React from "react";
import Rqm from "./Rqm";


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div>
        <h1>Hello React!</h1>
        <Rqm />
        </div>
      )
  }
};

export default App;
