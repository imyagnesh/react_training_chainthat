import React, { memo } from "react";


const CityDisplay = ({cityList}) => {
    return (
        <div className="city-list-container">
            {cityList.map((city) => {
                return (
                    <div>
                        <span>{city.name}</span>
                    </div>
                )
            })

            }
        </div>
    );
};

export default memo(CityDisplay);