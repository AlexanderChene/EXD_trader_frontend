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
    this.submitUpdatingForm = this.submitUpdatingForm.bind(this);
  }

  refreshOrdersData(){
    axios.get('http://localhost:5000/orders')
    .then(res => {
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
    this.setState({
      updatingOrder: Item
    })
  }

  submitUpdatingForm(){
    axios.post(`http://localhost:5000/orders/update/${this.state.updatingOrder._id}`, {order: this.state.updatingOrder})
     .then(res=>{
        this.setState({
          modalOpen: false
        }, ()=> {this.refreshOrdersData(); alert(`Order ${this.state.updatingOrder._id} has been updated successfully!!`)})
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
        {this.state.modalOpen&&<OrderEditModal isOpen={this.state.modalOpen} openModal={this.openModal} closeModal={this.closeModal} updatingOrder={this.state.updatingOrder} onChangeAtUpdatingForm={this.onChangeAtUpdatingForm}
          submitUpdatingForm = {this.submitUpdatingForm}
        />}
      </div>
    );
  }
}

export default App;
