import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Registration from "../Registration";

const Login = () => {
  console.log("login");
  return (
      <>
      <div>
      <label>Enter userName</label>
      <input type="text"></input>
      </div>
      <div>
      <label>Enter password</label>
      <input type="password"></input>
      </div>
      <div>
         <button>Submit</button>
      </div>
      <Link to="/reg">Registration</Link>
      <Router>
      <Switch>
        <Route exact path="/reg" component={Registration}>
        </Route>
      </Switch>
    </Router>
      
      </>
  );
};

export default Login;
