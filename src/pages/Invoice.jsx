import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'

function Invoice() {
  return (
    <>
      <Container>

        <Row>
          <Col>
            <h2 className='fw-50 mt-3'>Invoice</h2>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <Link to={'/'} className='btn text-white rounded bg-success '>
              <i className='fa-solid fa-circle-plus fa-lg me-2' />
              SAVE & EXIT
            </Link>
          </Col>
        </Row>
        <Row>
          <Table responsive="md" variant="light">
            <thead>
              <tr className='text-center border border-3'>
                <th style={{ height: '50px' }}></th>
                <th style={{ height: '50px' }}></th>
                <th style={{ height: '50px' }}></th>
                <th style={{ height: '50px' }}></th>
                <th style={{ height: '50px' }}></th>
                <th style={{ height: '50px' }}></th>
                <th style={{ height: '50px' }}></th>
                <th style={{ height: '50px' }}></th>
                <th style={{ height: '50px' }}></th>
                <th style={{ height: '50px' }}></th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center border border-3'>
                <td style={{ height: '150px' }}>Customer</td>
                <td style={{ height: '150px' }}></td>
                <td style={{ height: '150px' }}></td>
                <td style={{ height: '150px' }}></td>
                <td style={{ height: '150px' }}></td>
                <td style={{ height: '150px' }}></td>
                <td style={{ height: '150px' }}></td>
                <td style={{ height: '150px' }}>Invoice</td>
              </tr>
            </tbody>
          </Table>
          <Table responsive="md" stripped bordered hover variant="light">
            <thead>
              <tr className='text-center border border-3'>
                <th rowSpan={2} className='border border-3'>#</th>
                <th rowSpan={2} className='border border-3'>ITEM</th>
                <th rowSpan={2} className='border border-3'>QTY</th>
                <th rowSpan={2} className='border border-3'>UNIT</th>
                <th className='border border-3' >PRICE UNIT</th>
                <th colSpan={2} className='border border-3'>DISCOUNT</th>
                <th colSpan={2} className='border border-3'>TAX</th>
                <th rowSpan={2} className='border border-3'>AMOUNT</th>
              </tr>
              <tr className='text-center'>

                <th className='border border-3' >Without Tax</th>
                <th className='border border-3' >%</th>
                <th className='border border-3' >AMOUNT</th>
                <th className='border border-3' >%</th>
                <th className='border border-3' >AMOUNT</th>
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

export default Invoice