import React from 'react';
import Modal from 'react-modal';
import {Form, Button, Col } from 'react-bootstrap';
Modal.setAppElement('#root');
function OrderEditModal(props){
    return (
        <div>
            <Modal isOpen={props.isOpen} onRequestClose={props.closeModal} style={{overlay: {backgroundColor: 'grey'}}}>
                <h2>Please update order: {props.updatingOrder._id}</h2>
                <p>Modal Body</p>
                <div>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Action:</Form.Label>
                            <Form.Control as="select" value={props.updatingOrder.action} onChange={(e)=>props.onChangeAtUpdatingForm(e)} id={"action"}>
                                <option value="">Choose...</option>  
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Symbol:</Form.Label>
                            <Form.Control value={props.updatingOrder.symbol} onChange={(e)=>props.onChangeAtUpdatingForm(e)} id={"symbol"}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Qty:</Form.Label>
                            <Form.Control type="Number" value={props.updatingOrder.qty} onChange={(e)=>props.onChangeAtUpdatingForm(e)} id={"qty"}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Price:</Form.Label>
                            <Form.Control type="Number" value={props.updatingOrder.price} onChange={(e)=>props.onChangeAtUpdatingForm(e)} id={"price"}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Order Type:</Form.Label>
                            <Form.Control as="select" value={props.updatingOrder.orderType} onChange={(e)=>props.onChangeAtUpdatingForm(e)} id={"orderType"}>
                                <option value="">Choose...</option>
                                <option value="Market">Market</option>
                                <option value="Limit">Limit</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>TIF:</Form.Label>
                            <Form.Control as="select" value={props.updatingOrder.tif} onChange={(e)=>props.onChangeAtUpdatingForm(e)} id={"tif"}>
                                <option value="">Choose...</option>
                                <option value="IOC">IOC</option>
                                <option value="GTC">GTC</option>
                                <option value="Limit">FOK</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Stop Price:</Form.Label>
                            <Form.Control type="Number" value={props.updatingOrder.stopPrice} onChange={(e)=>props.onChangeAtUpdatingForm(e)} id={"stopPrice"}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows="3" value={props.updatingOrder.comment} onChange={(e)=>props.onChangeAtUpdatingForm(e)} id={"comment"}/>
                        </Form.Group>
                    </Form.Row>

                    {/*<Button variant="primary"  onClick = {this.onSubmit}>Submit</Button>*/}
                </Form>
                </div>
                <div>
                    <button onClick={props.closeModal}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default OrderEditModal;