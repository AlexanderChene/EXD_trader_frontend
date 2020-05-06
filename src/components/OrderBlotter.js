import React from 'react';
import { Card, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class OrderBlotter extends React.Component {
    render() {
        let tableContent = this.props.orders.map((elem, index) => {
            return <tr key={elem._id}><td>{elem.action}</td><td>{elem.symbol}</td><td>{elem.qty}</td><td>{elem.orderType}</td><td>{elem.tif}</td><td>{elem.price}</td><td>{elem.stopPrice}</td><td>{elem.comment}</td></tr>
        })
        return (
            <Card>
                <Card.Header style={{ border: '1px solid black', backgroundColor: 'black', color: 'white' }}>Order Blotter</Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Symbol</th>
                                <th>Qty</th>
                                <th>Order Type</th>
                                <th>TIF</th>
                                <th>Price</th>
                                <th>Stop Price</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>{tableContent}</tbody>
                    </Table>
            </Card.Body>
            </Card>)
    }
}

export default OrderBlotter;