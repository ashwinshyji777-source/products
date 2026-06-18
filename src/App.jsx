import Login from './pages/Login.jsx'
import Signup from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import {Routes, Route} from "react-router-dom"

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default App
