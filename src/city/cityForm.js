import React from "react";


const CityForm = ({ addCity,  inputRef, tempRef}) => {
    return (
        <form onSubmit={addCity}>
            <input type="text" ref={inputRef} placeholder="Enter City Name"/>
            <input type="text" ref={tempRef} placeholder="Enter Temprature Value"/>
            <button type="submit">Add City Info</button>
    </form>
    );
};

export default CityForm;