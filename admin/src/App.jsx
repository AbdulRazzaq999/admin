
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { useState } from 'react'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export const backend_url = "http://localhost:4000";


const App = () => {
  const [token,setToken] = useState('dfdfd');
 
  return (
    

    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {

        token === ""?<Login  setToken={setToken} />:
        <>
      <Navbar/>
      <hr />
      <div className='flex w-full'>
      <Sidebar/>
      <div>
        <Routes>
          <Route path='/add' element={<Add />} />
          <Route path='/list' element={<List />} />
          <Route path='/order' element={<Orders />} />
        </Routes>
      </div>
      </div>
      </>
      }
      
    </div>
  )
}

export default App
