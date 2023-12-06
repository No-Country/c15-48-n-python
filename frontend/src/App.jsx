import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './views/login/login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/login' element={<Login />}/>
        <Route path='/explore' element={<h1>Explore</h1>}/>
        <Route path='/publish' element={<h1>Publish</h1>}/>
        <Route path='/notifications' element={<h1>Notifications</h1>}/>
        <Route path='/profile' element={<h1>Profile</h1>}/>
      </Routes>
    </>
  )
}

export default App
