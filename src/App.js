import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const ToggleFunc = () => {
    if (Theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "rgb(25,25,25)";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [Theme, setTheme] = useState("light");
  return (
    <>
        <Navbar title="TextUtils" mode={Theme} Toggle={ToggleFunc} />
        <TextForm heading="Enter the text to analyze below" mode={Theme}/>
    </>
  );
}

export default App;
