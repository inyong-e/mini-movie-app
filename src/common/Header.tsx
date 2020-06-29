import * as React from "react";

interface IProps {
  text: string;
}

const Header = ({ text }: IProps) => (
  <header className="App-heaer">
    <h2>{text}</h2>
  </header>
);

export default Header;
