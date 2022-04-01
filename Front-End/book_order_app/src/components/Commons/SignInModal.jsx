import React from "react";
import { Modal, Button, Form } from 'react-bootstrap'
import { useRef } from 'react';
const BASE_URL = 'http://localhost:8099//api/v1/users/update';

const SignIpModal = ({ show, onHide }) => {
    const userID = useRef(null);
    const pw = useRef(null);
    const cartOrderHandler = async (userData) => {
        await fetch(BASE_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userID: userID.current.value,
                    pw: pw.current.value,
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
                    로그인
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={userID}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={pw}/>
                    </Form.Group>
                    <Form.Group>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="button">
                    로그인
                </Button>
                <Button onClick={onHide}>닫기</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default SignIpModal;