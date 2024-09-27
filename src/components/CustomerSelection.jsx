import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function CustomerSelection({ formData, handleDataChange }) {
    return (
        <>
            <Row>

                <Col sm={12} md={6}>
                    <FloatingLabel controlId="floatingSelect" label="Customer" className='border border-3 rounded' style={{ width: '210px' }}>
                        <Form.Select aria-label="Floating label select" className='text-center' style={{ width: '200px' }} type="text"
                            value={formData.cname}
                            onChange={(e) => handleDataChange('cname', e.target.value)} >
                            <option value=''></option>
                            <option value="XianInfotech">XianInfotech</option>
                            <option value="Luminar Technolab">Luminar Technolab</option>
                        </Form.Select>
                    </FloatingLabel>
                    <div className='ms-3 text-success' type="text"
                       >BAL: </div>
                </Col>

                <Col sm={12} md={6}>
                    <FloatingLabel controlId="floatingInputGrid" label="Phone No." className='border border-3 rounded w-50'>
                        <Form.Control type="text"
                            value={formData.phone}
                            onChange={(e) => handleDataChange('phone', e.target.value)} placeholder="Phone No." />
                    </FloatingLabel>
                </Col>

            </Row>

        </>
    )
}

export default CustomerSelection