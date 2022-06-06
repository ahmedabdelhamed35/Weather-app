import React from 'react';

const Form = (props) => {
    
    return(
            <form onSubmit={props.getWeather}>
               <input type ="text" placeholder="City..." name = "city"></input>
               <input type ="text" placeholder="Country..." name = "country"></input>
               <button>Get Weather</button>
            </form>
        )
}

export default Form;