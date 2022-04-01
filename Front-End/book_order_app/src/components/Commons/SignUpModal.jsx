import React from "react";
import { Modal, Button, Form } from 'react-bootstrap'
import { useRef } from 'react';
const BASE_URL = 'http://localhost:8099//api/v1/users/update';

const SignUpModal = ({ show, onHide }) => {
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
                    회원가입
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="textarea" placeholder="Name" />
                    </Form.Group>
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
                <Button onClick={cartOrderHandler}>회원가입</Button>
                <Button onClick={onHide}>닫기</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default SignUpModal;