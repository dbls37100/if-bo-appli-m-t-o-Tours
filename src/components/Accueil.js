import React from 'react';
import './Accueil.css';


class Accueil extends React.Component{
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
        
        };
            
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      };
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      };
    
      tick() {
        this.setState({
          date: new Date()
        });
      };

    render() {
        return (
            <div className="Accueil">
                <div className="accueil-structure--style">
                    <div className="tracking-in-expand">
                        <h1 className="tracking-out-contract">Mété<span className="o-color--style">o</span></h1>
                        <h1 className="tracking-out-contract">T<span className="o-color--style">o</span>urs</h1>
                    </div>
                    <h1>{this.state.date.toLocaleTimeString()}</h1>
                </div>
                <div id="test" class="rotating">
                <i class="fas fa-globe-americas"></i>
                </div>
            </div>
        )
    }
}

export default Accueil;
