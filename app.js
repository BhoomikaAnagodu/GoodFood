import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log(heading);

// JSX => HTML-like or XML-like syntax
const jsxHeading = <h1>Namaste React from JSX</h1>;

console.log(jsxHeading);

// React Component
const Title = () => <h2>React Component</h2>;

// Another way to write React Component
const Title1 = () => {
  return <h2>React Component</h2>;
};

// Component composition - composing/nesting react components in one another.
const HeadingComponent = () => (
  <div>
    <>{heading}</>
    <Title />
    <h3>Funtional Component</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);
root.render(<HeadingComponent />);
