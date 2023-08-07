import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TextForm.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleTextCopy = () => {
    var text = document.getElementById("text-box");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [Text, setText] = useState("Enter Text Here");
  return (
    <>
      <h1 className={`${props.mode}`}>{props.heading}</h1>
      <div className="container">
        <textarea
          value={Text}
          onChange={handleOnChange}
          className={`${props.mode}`}
          cols="30"
          rows="10"
          id ="text-box"
        ></textarea>
        <button disabled={Text.length === 0} className={`btn ${props.mode}`} onClick={handleUpClick}>
          To UpCase
        </button>
        <button disabled={Text.length === 0} className={`btn ${props.mode}`} onClick={handleLoClick}>
          To LowCase
        </button>
        <button disabled={Text.length === 0} className={`btn ${props.mode}`} onClick={handleClearClick}>
          Clear
        </button>
        <button disabled={Text.length === 0} className={`btn ${props.mode}`} onClick={handleTextCopy}>
          Copy
        </button>
        <button disabled={Text.length === 0} className={`btn ${props.mode}`} onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container">
        <h3>Your Text Summary</h3>
        <p>
          {Text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {Text.length} characters
        </p>
        <p>{0.008 * Text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} Minutes Read time for this text</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
