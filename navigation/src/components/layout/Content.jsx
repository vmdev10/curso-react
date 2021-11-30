import "./Content.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../views/examples/Home";
import Param from '../../views/examples/Param'
import About from "../../views/examples/About";

const Content = (props) => (
  <aside className="Content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/param/:id" element={<Param />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </aside>
);

export default Content;
