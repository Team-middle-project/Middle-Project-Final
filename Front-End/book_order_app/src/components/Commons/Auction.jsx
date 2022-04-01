import { Modal, Button, Form } from 'react-bootstrap'
import { useRef } from 'react';
// import classes from './Auction.module.css'
import React from 'react';
const BASE_URL = 'http://localhost:8099/api/v1/product/update';
const Auction = ({ show, onHide }) => {
    const productName = useRef(null);
    const productCost = useRef(null);
    const cartOrderHandler = async (userData) => {
        await fetch(BASE_URL,
          {
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                productName: productName.current.value,
                productCost : productCost.current.value,
            })
          }
        );
    };
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    중고거래
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>물품명</Form.Label>
                        <Form.Control type="text"  placeholder="물품명" ref={productName} />
                        <Form.Label>가격</Form.Label>
                        <Form.Control  type="text" placeholder="가격" ref={productCost} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button  onClick={cartOrderHandler}>입찰</Button>
                <Button  onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
};
export default Auction;