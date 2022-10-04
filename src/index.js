import React from "react";
import ReactDom from "react-dom";
import Homepage from "./pages/homapage";

import "./index.css";

function Index() {
  return (
    <>
      <Homepage />
    </>
  );
}

ReactDom.render(<Index />, document.querySelector("main"));
