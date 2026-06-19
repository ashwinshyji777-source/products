import Login from './pages/Login.jsx'
import Signup from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Loading from './pages/Loading.jsx'
import AddProduct from './pages/AddProduct.jsx'
import {Routes, Route} from "react-router-dom"

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Signup />} />
      <Route path='/loading' element={<Loading />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/add-product' element={<AddProduct />} />
    </Routes>
    </>
  )
}

export default App
