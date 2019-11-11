import React from 'react';
import axios from 'axios'; 

export default class AxiosApi extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        weather: []
    }
    }

    componentDidMount(){
        axios.get(`https://api.meteo-concept.com/api/0?token=77ccae56f0f0a521e8f6b7b325db7bebfd3c8b7d286d4641556ebadeefd5d2f0&insee=37261`)
        .then(res => {
            const weather = res.data;
            this.setState({ weather });
        })  
    }
    render () {
        return (
            <div>
                { this.state.weather.map(weathers => <h2>{weathers.name}</h2>)}
            </div>
        )
    }
}