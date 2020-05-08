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
      modalOpen: false,
      updatingOrder: {}
    }
    this.refreshOrdersData = this.refreshOrdersData.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChangeAtUpdatingForm = this.onChangeAtUpdatingForm.bind(this);
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

  openModal(elem){
    this.setState({
      updatingOrder: {...elem},
      modalOpen: true
    })
  }

  closeModal(){
    this.setState({
      modalOpen: false
    })
  }

  onChangeAtUpdatingForm(e){
    let Item = {...this.state.updatingOrder}
    Item[e.target.id] = e.target.value;
    console.log(Item);
    this.setState({
      updatingOrder: Item
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
        {this.state.modalOpen&&<OrderEditModal isOpen={this.state.modalOpen} openModal={this.openModal} closeModal={this.closeModal} updatingOrder={this.state.updatingOrder} onChangeAtUpdatingForm={this.onChangeAtUpdatingForm}/>}
      </div>
    );
  }
}

export default App;
