import React from 'react';
import axios from 'axios'; 
import './AxiosApi.css';
import './tours.jpg';
import Froid from './giphy.GIF';
import Froid1 from './giffroid.gif';
import Froid2 from './gif3.gif';
import Froid3 from './gif4.gif';

const randomGifFroid =  [Froid, Froid1, Froid2, Froid3]



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

    gifGenerator(min, max) {
        console.log(Math.floor(Math.random() * (max - min + 1)) + min)
        return Math.floor(Math.random() * (max - min + 1)) + min;
        
    }   

    
   



    render () {
        return (
            <div className="AxiosApi"> 
                {this.state.weather &&
                <> 
                    <div className="render-fond">
                        <div className="render-fond-structure">
                            <h3>Météo</h3>
                            <div className="image-fond--h2">
                                <h2>{this.state.weather.city.name }</h2>
                            </div>
                            <h2>{this.state.weather.city.cp }</h2>
                            <h2>Aujourd'hui :</h2>
                            <div className="temp-align--style"> 
                            <i className="fas fa-temperature-low"></i>
                                <h2>{this.state.weather.forecast[0].tmin} ° </h2>
                                <i className="fas fa-temperature-high"></i>
                                <h2>{this.state.weather.forecast[0].tmax} ° </h2>
                            </div>
                            <div>
                                <i className="fas fa-wind"></i>
                                <h2>Vent</h2>
                            </div>
                            <h2>Vous pourrez profitez de {this.state.weather.forecast[0].sun_hours } heures de soleil aujourd'hui</h2>
                            <div className="Gif-generator">
                            
                                <img src={randomGifFroid[this.gifGenerator(0,3)]} alt="GIF generator" />
                            </div>
                        </div>
                    </div>
                </>
                }

            </div>
        )
    }
}