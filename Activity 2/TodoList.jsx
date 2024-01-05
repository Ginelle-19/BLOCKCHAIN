import React from "react";
import './TodoList.module.css'
export default
class TodoList extends React.Component{
    render(){
    return(
        <div>
            <h1>Things to Do:</h1>
            <ul>
                <li>Clean My Bedroom</li>
                <li>Wash The Dishes</li>
                <li>Take a Bath</li>
            </ul>
        </div>
    );
    }
}