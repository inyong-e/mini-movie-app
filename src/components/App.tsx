import * as React from "react";

import "../App.css";

import Header from "../components/common/Header";
import Search from "./Search";

const App = () => {
  return (
    <div className="container">
      <Header text="mini-movie-app" />
      <Search />
    </div>
  );
};

export default App;
