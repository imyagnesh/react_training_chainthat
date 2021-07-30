import React from "react";
import ReactDOM from "react-dom";
import './root.css'

const App = (props) => {
  return (
   <div>
     <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <label for="userName"><b>Username</b></label>
    <input type="text" value={props.name} name="email" id="email" required></input>
    <label for="pwd"><b>Password</b></label>
    <input type="password" value={props.pwd} name="email" id="email" required></input>
    
   </div>
   
  );
};

ReactDOM.render(<App name="aakanksha" pwd="mypassword" />, document.getElementById("root"));
