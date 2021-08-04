import React, { Component } from "react";
import axiosInstance from "./utils/axiosInstance";

class WeatherApp extends Component {
    constructor(){
        super();

        this.state={
            search:null,
            weatherList:[],
        };
    }

    componentDidMount() {
        console.log('component did mount');
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const res = await axiosInstance.get("weatherList");
            this.setState({ weatherList: res.data });
        } catch (error) {
            console.log(error.message);
        }
    };

    searchCity=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
    }

    render() {
        const styleInfo = {
            paddingRight:'10px'
        }
        const elementStyle ={
        border:'solid',
        borderRadius:'10px',
        position:'relative',
        left:'10vh',
        height:'3vh',
        width:'20vh',
        marginTop:'5vh',
        marginBottom:'10vh'
        }
        const items = weatherList.filter((data)=>{
            if(this.state.search == null)
                return data
            else if(data.city.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
            }).map(data=>{
            return(
            <div>
                <ul>
                <li style={{position:'relative',left:'10vh'}}>
                    <span style={styleInfo}>{data.city}</span>
                    <span style={styleInfo}>{data.temperature}</span>
                </li>
                </ul>
            </div>
            )
        })

        return (
            <div>
                <span>
                <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchCity(e)} />
                </span>
            
            {items}
            </div>
        )
    }
}

export default WeatherApp;