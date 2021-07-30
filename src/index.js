import React from 'react';
import ReactDOM from 'react-dom';
import './root.css';


const App=(props)=>{
   return(
   <>
     <form className="form-part">
        
     <label> Enter Username :  
         <input className='form-input' type="text" placeholder="username" defaultValue={props.userName}></input>
     </label>
     <label> Enter Password :  
         <input className='form-input' type="password" placeholder="password" defaultValue={props.password}></input>
     </label>
     <label><button type="submit">Submit</button></label>
     </form>
   </>
   )
};

ReactDOM.render(
<App userName="rahul.singh@chainthat.com" password="password"/>,
document.getElementById("root")
);

