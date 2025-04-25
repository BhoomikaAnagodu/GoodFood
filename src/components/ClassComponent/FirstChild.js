import React from "react";

class FirstChild extends React.Component {
  constructor(props) {
    super(props);

    console.log("FirstChild Constructor");
  }

  componentDidMount() {
    console.log("FirstChild Component Did Mount");
  }

  render() {
    console.log("FirstChild Render");

    return (
      <div>
        <h1>FirstChild Component</h1>
      </div>
    );
  }
}

export default FirstChild;
