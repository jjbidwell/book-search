import React from "react";
import API from "../../util/API"




class Saved extends React.Component {
    componentDidMount(){
        API.getFavorites().then(results=>{
            console.log(results);
        }).catch(err=>{
            console.log(err);
        })
    }
    render(){
    return (

                <div>
                    <h1>Results:</h1>
                </div>
            )
        }
    }

export default Saved;