import React from 'react';
import { Card, Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class OrderBlotter extends React.Component{
    render(){
        return(
        <Card>
            <Card.Header style={{ border: '1px solid black', backgroundColor: 'black', color: 'white'}}>Order Blotter</Card.Header>
            <Card.Body>
                this is the table
            </Card.Body>
        </Card>)
    }
}

export default OrderBlotter;