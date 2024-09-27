import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import CustomerSelection from '../components/CustomerSelection'
import BillingAddress from '../components/BillingAddress'
import InvoiceDetails from '../components/InvoiceDetails'
import ItemEntry from '../components/ItemEntry'
import Payment from '../components/Payment'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import { addCompanies } from '../services/allApis';
import { useNavigate } from 'react-router-dom';


function Sales() {

  const [status, setStatus] = useState(true)

  const navigate = useNavigate()

  const changeStatus = () => {
    setStatus(!status)
  }

  const handleAddCompany = async (e) => {
    e.preventDefault();
    console.log('Combined Form Data:', formData);
    console.log(formData);
    const { cname, phone, address } = formData
    if (!cname || !phone || !address) {
      toast.warning("Enter all the details properly!!!")
    } else {
      const result = await addCompanies(formData)
      console.log(result);
      if (result.status == 201) {
        toast.success("User Registration Successfull")
        setFormData({ cname: "", phone: "", address: "" })
        setStatus(true)
        navigate('/invoice')
      } else {
        toast.error(result.response.data)
      }
    }
  }

  const [formData, setFormData] = useState({
    cname: '',
    phone: '',
    address: ''
  });

  const handleDataChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <>
      <Form onSubmit={handleAddCompany}>
        <h2 className='mt-3 ms-3'>Sale</h2>
        <Row className='d-flex justify-content-between'>

          <Col sm={12} md={5} className='ms-3 mt-5'>
            <CustomerSelection formData={formData} handleDataChange={handleDataChange} />
            <BillingAddress formData={formData} handleDataChange={handleDataChange} />
          </Col>

          <Col sm={12} md={5} className='mt-5'>
            <InvoiceDetails />
          </Col>
        </Row >

        <Row className='mt-5'>
          <ItemEntry formData={formData} handleDataChange={handleDataChange} />
        </Row>

        <Row className='mt-5'>
          <Payment />
        </Row>
        <Row className='float-end m-3'>
          <Col>
            <button type="submit" className='btn btn-primary btn-lg ms-3 mt-2' >SAVE</button>
          </Col>
        </Row>
      </Form>
      <ToastContainer />
    </>
  )
}

export default Sales