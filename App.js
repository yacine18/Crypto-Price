import React, { Component} from 'react';
import PriceList from './Component/PriceList';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">
          <div className="tittle">
             <h1>Crypto Currencies Price</h1>
          </div>
            <PriceList />
      </div>
      
    );
  }
}

export default App;
