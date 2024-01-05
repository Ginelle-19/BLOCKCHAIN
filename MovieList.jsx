import React from "react";
export default
class MovieList extends React.Component{
    render(){
    return(
        <div>
            <h1>List of Movies:</h1>
            <ul>
                <li>Harry Potter</li>
                <li>Hunger Games</li>
                <li>Extraction</li>
            </ul>
        </div>
    );
    }
}