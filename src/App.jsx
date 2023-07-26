import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Outlet } from 'react-router-dom'

import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}

export default App
