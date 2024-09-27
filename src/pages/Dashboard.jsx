import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Transactions from '../components/Transactions'

function Dashboard() {
  return (
    <>
      <Row className='g-0'>
        <Col sm={12} md={3}>
        
        </Col>
        <Col sm={12} md={9} className='mt-5'>
          <Transactions />
        </Col>
      </Row>
    </>
  )
}

export default Dashboard