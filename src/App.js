import React from 'react';
import OrderEntry from './components/OrderEntry'
import OlderBlotter from './components/OrderBlotter'
import './App.css'

function App() {
  return (
    <div className="container">
      <OrderEntry/>
      <OlderBlotter/>
    </div>
  );
}

export default App;
