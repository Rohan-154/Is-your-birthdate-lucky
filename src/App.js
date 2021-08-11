import React, { useState } from "react";
import "./styles.css";
import background from "/src/Background.svg";
import happy from "/src/happy.svg";
import sad from "/src/sad.svg";

var dateInput = "";
var luckyNo = 0;

const happyImg = (
  <img alt="happyImage" src={happy} width="100%" height="200px" />
);
const sadImg = <img alt="unhappyImage" src={sad} width="100%" height="200px" />;

export default function App() {
  const [displayAlert, setDisplayAlert] = useState("flex");

  const [warning, setwarning] = useState(["", ""]);

  function checkBtnHandler(e) {
    //to stop refreshing page
    e.preventDefault();

    const dateArray = dateInput.split("-");
    let sum = 0;

    dateArray.map((string) => {
      for (let i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
    });
    //check if sum divisible by lucky no. entered by user
    if (sum % Number(luckyNo) === 0) {
      setwarning(["Hurray!!You are a lucky person!", happyImg]);
    } else {
      setwarning(["Oops!!Your birthday is not a lucky number!", sadImg]);
    }
  }

  return (
    <div className="App">
      {/* header */}
      <div
        className="parallax"
        style={{
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          backgroundImage: `url("${background}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div className="title">
          <h1>Is Your Birthday Lucky?</h1>
          <a href="#mainSection">Click here for main content</a>
        </div>
      </div>

      {/* body */}
      <section id="mainSection" className="section">
        {/* privacy notice */}
        <div id="alertBox" style={{ display: `${displayAlert}` }}>
          <div className="notice">
            <strong>Privacy Notice!</strong> We respect your privacy,No data is
            being stored.
          </div>

          <div
            onClick={() => {
              setDisplayAlert("none");
            }}
            style={{
              paddingLeft: "1rem",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >
            <span role="img" aria-labelledby="crossIcon">
              &#10060;
            </span>
          </div>
        </div>

        {/* form section for inputs */}
        <h2>Enter Your Birthdate and lucky number to test your luck.</h2>
        <form onSubmit={checkBtnHandler}>
          <label className="label" htmlFor="datePicker">
            Enter your Birth date:
          </label>
          <input
            id="datePicker"
            onChange={(e) => {
              dateInput = e.target.value;
            }}
            type="date"
            required
          />
          <label className="label" htmlFor="luckyNo">
            Enter your Lucky Number:
          </label>
          <input
            id="luckyNo"
            min="1"
            step="1"
            required
            onChange={(e) => {
              luckyNo = e.target.value;
            }}
            type="number"
          />
          <button type="submit">check</button>
        </form>

        {/* output result section */}
        <div className="output">
          <div className="label">{warning[0]}</div>
          {warning[1]}
        </div>

        {/* footer section */}
        <footer>
          <ul>
            <li className="footerLink">
              <a href="https://github.com/Rohan-154">
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://twitter.com/Rohan_415?s=09">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://www.linkedin.com/in/rohan-dubey-2854b9201">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>

          <div className="trademark">
            Rohan Dubey- A Web Developer{" "}
            {/* <a
              href="#alertBox"
              onClick={() => {
                setDisplayAlert("flex");
              }}
              style={{ cursor: "pointer", color: "Black" }}
            >
              Privacy Policy
            </a> */}
          </div>
        </footer>
      </section>
    </div>
  );
}
