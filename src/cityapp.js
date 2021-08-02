import React, { PureComponent, createRef } from "react";
import CityForm from "./city/cityForm";
import CityDisplay from "./city/cityDisplay";
import axiosInstance from "./utils/axiosInstance";
import "./city/city.css";

class CityApp extends PureComponent {
     state = {
         cityList : [],
         status: "idle",
     };

     inputRef = createRef();
     tempRef = createRef();

     componentDidMount() {
        this.fetchCityData();
    };

    fetchCityData = async () => {
        try {
          this.setState({ status: "load_data" });
          const res = await axiosInstance.get("city");
          console.log(res.data);
          this.setState({ status: "load_data_request" });
          this.setState({ cityList: res.data, loading: false, status: "idle" });
        } catch (error) {
          console.log(error.message);
          this.setState({ status: "load_data_error" });
        }
      };

      addCity = async (event) => {
        try {
          event.preventDefault();
          this.setState({ status: "add_data" });
          const res = await axiosInstance.post("city", {
            name: this.inputRef.current.value,
            temp: this.tempRef.current.value,
          });
    
          this.setState(
            ({ cityList }) => {
              return {
                cityList: [...cityList, res.data],
              };
            },
            () => {
              this.inputRef.current.value = "";
              this.tempRef.current.value = "";
            }
          );
        } catch (error) {
          this.setState({ status: "add_data_error" });
        }
      };

    render() {
        console.log("component rendered");
        return (
            <div className="container">
                <h1>City App</h1>
                <CityForm addCity={this.addCity} inputRef={this.inputRef} tempRef={this.tempRef}/>
                <CityDisplay cityList={this.state.cityList}/>
            </div>
        );
    }
}

export default CityApp;