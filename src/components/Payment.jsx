import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Payment() {
    return (
        <>
            <Row>

                <Col sm={12} md={3}>
                    <FloatingLabel controlId="floatingSelect" label="Payment Type" className='border border-3 rounded ms-3' style={{ width: '260px' }}>
                        <Form.Select aria-label="Floating label select" className='text-center' style={{ width: '250px' }}>
                            <option value="0">Cash</option>
                            <option value="1">Card</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>

                <Col sm={12} md={3}>
                    <Form.Group className="d-flex justify-content-between align-items-center" controlId="formHorizontalEmail">
                        <Form.Check aria-label="option 1" column sm={3} className='me-2' />
                        <Form.Label column sm={4} >
                            Round Off :
                        </Form.Label>
                        <Col sm={7} className='border border-3 rounded'>
                            <Form.Control type="text" placeholder="" disabled />
                        </Col>
                    </Form.Group>
                    
                </Col>

                <Col sm={12} md={6}>
                
                    <Form.Group className="mb-3 d-flex justify-content-center align-items-center" controlId="formHorizontalEmail">
                        <Form.Label column sm={2} className='ms-5'>
                            Total :
                        </Form.Label>
                        <Col sm={5} className='border border-3 rounded'>
                            <Form.Control type="text" placeholder="" readOnly />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex justify-content-center align-items-center" controlId="formHorizontalEmail">
                        <Form.Check aria-label="option 1" column sm={3} className='' />
                        <Form.Label column sm={2} className='ms-5'>
                            Recieved :
                        </Form.Label>
                        <Col sm={5} className='border border-3 rounded'>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex justify-content-center align-items-center" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Balance :
                        </Form.Label>
                        <Col sm={5} className=''>
                            <Form.Control type="text" placeholder="" readOnly />
                        </Col>
                    </Form.Group>

                </Col>

            </Row>
        </>
    )
}

export default Payment