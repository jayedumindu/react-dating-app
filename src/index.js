import React from "react";
import ReactDom from "react-dom";

function Index() {
  return (
    <div>
      <h1>Hello This is my react App</h1>
    </div>
  );
}

ReactDom.render(<Index />, document.querySelector("main"));
