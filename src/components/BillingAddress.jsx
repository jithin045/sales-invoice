import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function BillingAddress({ formData, handleDataChange }) {
    return (
        <>
            <Row>
                <Col>
                    <FloatingLabel controlId="floatingTextarea" label="Billing Address" className='border border-3 rounded' style={{ height: '110px', width: '260px' }}>
                        <Form.Control type="text"
                            value={formData.address}
                            onChange={(e) => handleDataChange('address', e.target.value)} placeholder="Billing Address" style={{ height: '100px', width: '250px' }} />
                    </FloatingLabel>
                </Col>
            </Row>
        </>
    )
}

export default BillingAddress