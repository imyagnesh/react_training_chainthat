import React from "react";
import ReactDOM from "react-dom";
import './root.css'

const App = (props) => {
  return (
    <>
      <br></br>
      <label><b>{props.userLabel}</b></label>
      <input type="text" placeholder={props.user}/>
      <br></br>
      <br></br>
      <label><b>{props.pwLabel}</b></label>
      <input type="text" placeholder={props.password}/>
    </>
  );
};

ReactDOM.render(<App userLabel="User Name : " pwLabel="Password : " user="ashish.jain" password="thisispassword"/>, document.getElementById("root"));
