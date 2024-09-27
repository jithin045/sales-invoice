import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


function ItemEntry() {


    const [rows, setRows] = useState([{ slno: '', item: '', quantity: '', unit: '', priceunit: '', dpercentage: '', damount: '', tpercentage: '', tamount: '', amount: '' }]);

    const handleInputChange = (index, event) => {
        const values = [...rows];
        values[index][event.target.name] = event.target.value;
        setRows(values);
    };

    const handleAddRow = () => {
        setRows([...rows, { slno: '', item: '', quantity: '', unit: '', priceunit: '', dpercentage: '', damount: '', tpercentage: '', tamount: '', amount: '' }]);
    };

    return (
        <>
            <Container>

                <Row>
                    <form>
                        <table className='border border-3' responsive="md">
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
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        <td><input className='border border-1' style={{ height: '40px', width: '50px' }} type="text" name="slno" value={row.slno} onChange={event => handleInputChange(index, event)} /></td>
                                        <td><input className='border border-1' style={{ height: '40px', width: '200px' }} type="text" name="item" value={row.item} onChange={event => handleInputChange(index, event)} /></td>
                                        <td><input className='border border-1' style={{ height: '40px', width: '120px' }} type="number" name="quantity" value={row.quantity} onChange={event => handleInputChange(index, event)} /></td>
                                        <select className='border border-1' style={{ height: '40px', width: '120px' }} name="unit" value={row.unit} onChange={event => handleInputChange(index, event)}>
                                            <option value={"NONE"}>
                                                NONE
                                            </option>
                                            <option value={"BAG"}>
                                                BAG
                                            </option>
                                            <option value={"PACK"}>
                                                PACK
                                            </option>
                                        </select>
                                        <td><input className='border border-1' style={{ height: '40px', width: '120px' }} type="text" name="price" value={row.price} onChange={event => handleInputChange(index, event)} /></td>
                                        <td><input className='border border-1' style={{ height: '40px', width: '120px' }} type="text" name="dpercentage" value={row.dpercentage} onChange={event => handleInputChange(index, event)} /></td>
                                        <td><input className='border border-1' style={{ height: '40px', width: '120px' }} type="text" name="damount" value={row.damount = (row.dpercentage / 100)} onChange={event => handleInputChange(index, event)} /></td>
                                        <select className='border border-1' style={{ height: '40px', width: '120px' }} name="tpercentage" value={row.tpercentage} onChange={event => handleInputChange(index, event)}>
                                            <option value={12}>
                                                GST@12
                                            </option>
                                            <option value={15}>
                                                GST@15
                                            </option>
                                            <option value={18}>
                                                GST@18
                                            </option>
                                        </select>
                                        <td><input className='border border-1' style={{ height: '40px', width: '120px' }} type="text" name="tamount" value={row.tamount = (row.tpercentage / 100)} onChange={event => handleInputChange(index, event)} /></td>
                                        <td><input className='border border-1' style={{ height: '40px', width: '180px' }} type="text" name="amount" value={row.amount = (row.quantity * row.price) - (row.damount) + (row.tamount)} onChange={event => handleInputChange(index, event)} /></td>
                                    </tr>


                                ))}
                            </tbody>
                            <tr>
                                <td className='border border-1' style={{ height: '40px', width: '120px' }} colSpan={2}>Total</td>
                                <td className='border border-1' style={{ height: '40px', width: '120px' }} ></td>
                                <td className='border border-1' style={{ height: '40px', width: '120px' }} ></td>
                                <td className='border border-1' style={{ height: '40px', width: '120px' }} ></td>
                                <td className='border border-1' style={{ height: '40px', width: '120px' }} ></td>
                                <td className='border border-1' style={{ height: '40px', width: '120px' }} ></td>
                                <td className='border border-1' style={{ height: '40px', width: '120px' }} ></td>
                                <td className='border border-1' style={{ height: '40px', width: '120px' }} ></td>
                                <td className='border border-1' style={{ height: '40px', width: '120px' }} ></td>
                            </tr>
                        </table>
                        <button className='btn btn-dark btn-sm ms-3 mt-2' type="button" onClick={handleAddRow}>Add Row</button>
                    </form>


                </Row>
            </Container>
        </>
    )
}

export default ItemEntry