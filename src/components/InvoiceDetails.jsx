import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function InvoiceDetails() {
    return (
        <>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={4}>
                    Invoice Number :
                </Form.Label>
                <Col sm={6}>
                    <Form.Control type="text" placeholder="" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={4}>
                    Invoice Date :
                </Form.Label>
                <Col sm={6}>
                    <Form.Control type="date" placeholder="DD/MM/YYYY" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formGridState">
                <Form.Label column sm={4}>State of supply : </Form.Label>
                <Col sm={6}>
                    <Form.Select defaultValue="Choose...">
                        <option value=''>SELECT</option>
                        <option value="SUPPLY-1">SUPPLY-1</option>
                        <option value="SUPPLY-2">SUPPLY-2</option>
                    </Form.Select>
                </Col>
            </Form.Group>
        </>
    )
}

export default InvoiceDetails