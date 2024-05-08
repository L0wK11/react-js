import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

import Navbar from './components/ui/Header/Navbar';
import Sidebar from './components/ui/Sidebar/Sidebar';
import Dashboard from './pages/1. Dashboard/Dashboard'
import Admin from './pages/2. Admin/Admin'
import Student from './pages/3. Student/Student'
import Footer from './components/ui/Footer/Footer'

function App() {


  return (
  <div className='flex flex-col h-screen'>
    <Router>
      <Navbar/>

      <div className='flex flex-1 overflow-y-auto'>
        <Sidebar/>
          <Routes>
            <Route exact path='/' element={<Dashboard/>}/>
            <Route exact path='/admin' element={<Admin/>}/>
            <Route exact path='/student' element={<Student/>}/>
          </Routes>
      </div>

      <Footer/>
    </Router>
  
  </div>
  );
}

export default App
