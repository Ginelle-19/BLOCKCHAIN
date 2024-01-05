import React from "react";
export default
class Welcome extends React.Component{
    render(){
        let message = "I think I've done it!";
    return(
        <div>
        <h1>{message}</h1>
        <h3>Andrew Ginelle P. Macapagal</h3>
        </div>
    );
    }
}