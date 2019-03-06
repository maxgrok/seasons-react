import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            lat: null,
            errorMessage: ""
        }
    }
    componentDidMount(){
        console.log("My component was rendered to the screen")
        window.navigator.geolocation.getCurrentPosition(
            position =>{
                this.setState({lat: position.coords.latitude});
            },//success callback
            err =>{
                this.setState({ errorMessage: err.message });
            } //failure callback
        );
    }
   
    componentDidUpdate(){
        console.log("My component did update. It rerendered!");
    }

    render(){    //conditional rendering
        if (this.state.errorMessage && !this.state.lat){
            return (
                <div> 
                    Error: {this.state.errorMessage}
                    </div>
            )
        }
        if (!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading...</div>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
