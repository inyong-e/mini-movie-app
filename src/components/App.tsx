import * as React from "react";
import Header from "../components/common/Header";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <Header text="mini-movie-app" />
      <Search />
    </div>
  );
};

export default App;
