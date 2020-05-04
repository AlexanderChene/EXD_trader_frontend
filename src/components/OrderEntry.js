import React from 'react';
import { Card, Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class OrderEntry extends React.Component {
    render() {
        return (<Card>
            <Card.Header style={{ border: '1px solid black', backgroundColor: 'black', color: 'white'}}>EXD Trader</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Action:</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>Buy</option>
                                <option>Sell</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Symbol:</Form.Label>
                            <Form.Control value={'hello'}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Qty:</Form.Label>
                            <Form.Control type="Number" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control type="Number" value={1}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Order Type:</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>Market</option>
                                <option>Limit</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>TIF:</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>IOC</option>
                                <option>GTC</option>
                                <option>FOK</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Stop Price:</Form.Label>
                            <Form.Control type="Number" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>)
    }
}

export default OrderEntry;
