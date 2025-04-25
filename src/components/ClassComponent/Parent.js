import React from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";

class Parent extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>Parent Class Component</h1>
        <FirstChild />
        <SecondChild />
      </div>
    );
  }
}

export default Parent;
