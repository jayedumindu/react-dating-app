import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/homapage";
import Dashboard from "./pages/dsahboard";

import "./index.css";

function Index() {
  return (
    <>
      <Router>
        <Routes>
          {/* homepage */}
          <Route path="/" element={<Homepage />}></Route>
          {/* dashboard */}
          <Route path="user/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

ReactDom.render(<Index />, document.querySelector("main"));
