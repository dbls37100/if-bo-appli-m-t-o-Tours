import React from 'react';
import axios from 'axios'; 

export default class AxiosApi extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        weather: null
    }
    }
    
    componentDidMount(){
        axios.get("https://api.meteo-concept.com/api/forecast/daily?token=77ccae56f0f0a521e8f6b7b325db7bebfd3c8b7d286d4641556ebadeefd5d2f0&insee=37261")
        .then(res => {
            console.log(res)
            this.setState({ weather : res.data });
        })  
    }
    render () {
        return (
            <div> 
                <span>Météo</span>
                {this.state.weather &&
                <> 
                <h2>{this.state.weather.city.name }</h2>
                <h2>{this.state.weather.city.cp }</h2>
                <h2>{this.state.weather.forecast[0].datetime }</h2>
                <h2>il fera {this.state.weather.forecast[2].tmin }° minimum.</h2>
                <h2>il fera {this.state.weather.forecast[2].tmax }° maximum.</h2>
                <h2>Vous pourrez profitez de {this.state.weather.forecast[1].sun_hours } heures de soleil aujourd'hui</h2>
                </>
                }

            </div>
        )
    }
}