import React from "react";
import Header from "./Header";
import Body from "./Body";

const App = () => {
  const [darkmode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div className="container">
      <Header darkMode={darkmode} toggleDarkMode={toggleDarkMode} />

      <Body darkMode={darkmode} />
    </div>
  );
};
export default App;
