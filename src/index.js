import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component{
    state = {
        lat: null, 
        errorMessage: ""
    }

    componentDidMount(){
        console.log("My component was rendered to the screen")
        window.navigator.geolocation.getCurrentPosition(
            position =>this.setState({lat: position.coords.latitude}), //success callback
            err =>this.setState({ errorMessage: err.message }) //failure callback
        );
    }
   
    componentDidUpdate(){
        console.log("My component did update. It rerendered!");
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return (
                <div> 
                    Error: {this.state.errorMessage}
                    </div>
            )
        }
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request" />
    }

    render(){    //conditional rendering
        return (
            <div>
            {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
