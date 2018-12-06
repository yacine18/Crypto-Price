import React, { Component} from 'react';
import axios from 'axios';
import './PriceList.css';

class PriceList extends Component {
  state = {
    price : []
  }

  componentDidMount() {
    axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
    .then(res => {
          this.setState({
               price: res.data
          })
    })
  }
  render() {
    return (
     <div className="container">
      <table id="simple-board">
        <tbody>
          <tr id="row0">
            <td id="cell0-0">Symbol
            {this.state.price.map(price => <div className="crypto-name">{price.symbol}</div>)}
            </td>
            <td id="cell0-3">Name
            {this.state.price.map(price => <div className="crypto-name">{price.name}</div>)}
            </td>
            <td id="cell0-1">Price
            {this.state.price.map(price => <div className="crypto-price">{price.price_usd}</div>)}
            </td>
            <td id="cell0-2">Last updated
            {this.state.price.map(price => <div className="last-updated">{price.last_updated}</div>)}
            </td>
          </tr>
        </tbody>
      </table>
     </div>
     
    );
  }
}

export default PriceList;