import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'

function Transactions() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className='fw-50 '>TRANSACTIONS</h2>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <Link to={'/sales'} className='btn text-white rounded bg-primary'>
              <i className='fa-solid fa-circle-plus fa-lg me-2' />
              Add Sale
            </Link>
          </Col>
        </Row>
        <Row>
          <Table responsive="md" stripped bordered hover variant="light">
            <thead>
              <tr>
                <th>DATE</th>
                <th>INVOICE NO.</th>
                <th>PARTY NAME</th>
                <th>TRANSACTION</th>
                <th>PAYMENT TYPE</th>
                <th>AMOUNT</th>
                <th>BALANCE DUE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  )
}

export default Transactions