import React from "react";
import { Modal, Button, Form } from 'react-bootstrap'
import { useRef } from 'react';
const BASE_URL = 'http://localhost:8099/api/v1/product/add';
const AddProduct = ({ show, onHide }, props) => {
    const productId = useRef(null);
    const productName = useRef(null);
    const productCost = useRef(null);
    const productImage = useRef(null);
    const productDescription = useRef(null);
    const cartOrderHandler = async (userData) => {
        await fetch(BASE_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productName: productName.current.value,
                    productCost: productCost.current.value,
                    productImage: productImage.current.value,
                    productDate : null,
                    productDescription: productDescription.current.value,
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
                <Modal.Title>
                    물품등록하기
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>물품명</Form.Label>
                        <Form.Control type="text" placeholder="물품명" ref={productName} />
                        <Form.Label>가격</Form.Label>
                        <Form.Control type="text" placeholder="가격" ref={productCost} />
                        <Form.Label>상품이미지</Form.Label>
                        <Form.Control type="text" placeholder="상품이미지" ref={productImage} />
                        <Form.Label>상품설명</Form.Label>
                        <Form.Control type="text" placeholder="상품설명" ref={productDescription} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={cartOrderHandler} onClose = {props.onClose}>등록</Button>
                <Button onClick={onHide}>닫기</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default AddProduct;