import React, { memo } from "react";


const CityDisplay = ({cityList}) => {
    return (
        <div className="city-list-container">
            {cityList.map((city) => {
                return (
                    <div>
                        <span>{city.name} : {city.temp}</span>
                    </div>
                )
            })

            }
        </div>
    );
};

export default memo(CityDisplay);