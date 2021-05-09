import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopingList: [
        { id: 1,
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          value: 0 
        },
        { id: 2, 
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          value: 0 
        },
        { id: 3, 
          image: './products/mug.jpg',
          desc: 'Unique Mug',
          value: 0 
        },
        { id: 3, 
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          value: 0 
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container container1">
          <div className="row align-items-start heading">
            <h1 className="col topheading">
              Shop to React
            </h1>
            <div className="col icon">
              <FontAwesomeIcon icon={faShoppingCart} /> 0 items
            </div>
          </div>
        </div>  
        
        <RenderShopingList shopingList={this.state.shopingList} />
      </div>
    );
  }
}

function RenderShopingList(props) {
  return (
   <div>
     {props.shopingList.map(list => {
       return (
        <div key={list.id}>
          <div className="container">
            <div className="row justify-content-start outline">
              <div className="col-2">
                <div className="desc">{list.desc}</div>
                <div className="productImg"> <img src={list.image} alt={list.desc} width="100px" /> </div>
              </div>
              <div className="col-2 Quantity">
                <span><div className="value"> {list.value}</div>quantity</span> 
              </div>
            </div>
          </div>      
        </div>  
       );
     })}
  </div>   
  );
}
export default App;
