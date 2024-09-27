
import './App.css'
import './bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages/Dashboard'
import Sales from './pages/Sales'
import Invoice from './pages/Invoice';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/sales' element={<Sales />}></Route>
        <Route path='/invoice' element={<Invoice />}></Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
