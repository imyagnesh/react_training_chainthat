import React from "react";


const CityForm = ({ addCity,  inputRef}) => {
    return (
        <form onSubmit={addCity}>
            <input type="text" ref={inputRef}/>
            <button type="submit">Add City Info</button>
    </form>
    );
};

export default CityForm;