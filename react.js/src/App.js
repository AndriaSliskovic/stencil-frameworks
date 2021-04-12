import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state={
        showStockFinder:false
    }
    render() {
        let stockFinder=null
        if (this.state.showStockFinder){
            stockFinder=<uc-stock-finder></uc-stock-finder>
        }
        return (
            <div className="App">
                <h3>React example</h3>
                <uc-stock-price></uc-stock-price>
                {stockFinder}
                <button onClick={()=>this.setState({showStockFinder:true})}>Show finder</button>
            </div>
        );
    }
}

export default App;
