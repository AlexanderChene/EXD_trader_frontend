import React from 'react';
import axios from 'axios';
import OrderEntry from './components/OrderEntry'
import OrderBlotter from './components/OrderBlotter'
import OrderEditModal from './components/OrderEditModal'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      orders: [],
      modalOpen: false
    }
    this.refreshOrdersData = this.refreshOrdersData.bind(this);
    this.openModal = this.openModal.bind(this);
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

  openModal(){
    let isOpen = this.state.modalOpen;
    this.setState({
      modalOpen: !isOpen
    })
  }

  componentDidMount(){
    this.refreshOrdersData();
  }
  render(){
    return (
      <div className="container">
        <OrderEntry refreshOrdersData={this.refreshOrdersData}/>
        <OrderBlotter orders={this.state.orders} refreshOrdersData={this.refreshOrdersData} openModal={this.openModal}/>
        <OrderEditModal isOpen={this.state.modalOpen} openModal={this.openModal}/>
      </div>
    );
  }
}

export default App;
