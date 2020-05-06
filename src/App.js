import React from 'react';
import axios from 'axios';
import OrderEntry from './components/OrderEntry'
import OlderBlotter from './components/OrderBlotter'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      orders: []
    }
    this.refreshOrdersData = this.refreshOrdersData.bind(this);
  }

  refreshOrdersData(){
    axios.get('http://localhost:5000/orders')
    .then(res => {
      console.log(res.data);
      this.setState({
        orders: [...res.data]
      })
    })
  }

  componentDidMount(){
    this.refreshOrdersData();
  }
  render(){
    return (
      <div className="container">
        <OrderEntry refreshOrdersData={this.refreshOrdersData}/>
        <OlderBlotter orders={this.state.orders}/>
      </div>
    );
  }
}

export default App;
