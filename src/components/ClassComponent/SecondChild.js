import React from "react";

class SecondChild extends React.Component {
  constructor(props) {
    super(props);

    console.log("SecondChild Constructor");
  }

  componentDidMount() {
    console.log("SecondChild Component Did Mount");
  }

  render() {
    console.log("SecondChild Render");

    return (
      <div>
        <h1>SecondChild Component</h1>
      </div>
    );
  }
}

export default SecondChild;
