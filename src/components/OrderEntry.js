import React from 'react';
import { Card, Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class OrderEntry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            order: {
                action: '',
                symbol :'',
                qty:'', 
                orderType:'', 
                tif:'', 
                price:'', 
                stopPrice:'',
                comment:''
            }

        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleOnchange(e){
        let newOrder = {...this.state.order};
        newOrder[e.target.id] = e.target.value;
        this.setState({
            order: newOrder
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state.order);
    }
    render() {
        return (<Card>
            <Card.Header style={{ border: '1px solid black', backgroundColor: 'black', color: 'white'}}>EXD Trader</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Action:</Form.Label>
                            <Form.Control as="select" value={this.state.order.action} onChange={this.handleOnchange} id={"action"}>
                                <option value="">Choose...</option>  
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Symbol:</Form.Label>
                            <Form.Control value={this.state.order.symbol} onChange={this.handleOnchange} id={"symbol"}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Qty:</Form.Label>
                            <Form.Control type="Number" value={this.state.order.qty} onChange={this.handleOnchange} id={"qty"}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Price:</Form.Label>
                            <Form.Control type="Number" value={this.state.order.price} onChange={this.handleOnchange} id={"price"}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Order Type:</Form.Label>
                            <Form.Control as="select" value={this.state.order.orderType} onChange={this.handleOnchange} id={"orderType"}>
                                <option value="">Choose...</option>
                                <option value="Market">Market</option>
                                <option value="Limit">Limit</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>TIF:</Form.Label>
                            <Form.Control as="select" value={this.state.order.tif} onChange={this.handleOnchange} id={"tif"}>
                                <option value="">Choose...</option>
                                <option value="IOC">IOC</option>
                                <option value="GTC">GTC</option>
                                <option value="Limit">FOK</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="stopPrice">
                            <Form.Label>Stop Price:</Form.Label>
                            <Form.Control type="Number" value={this.state.order.stopPrice} onChange={this.handleOnchange} id={"stopPrice"}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="comment">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows="3" value={this.state.order.comment} onChange={this.handleOnchange} id={"comment"}/>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit" onSubmit = {this.onSubmit}>Submit</Button>
                </Form>
            </Card.Body>
        </Card>)
    }
}

export default OrderEntry;
