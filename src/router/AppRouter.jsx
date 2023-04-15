import React from 'react'
import { BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom'


import HomePage from '../pages/HomePage'
import Episodes from '../pages/Episodes'
import Location from '../pages/Location'
import Navbar from '../components/NavBar/Navbar'


const AppRouter = () => {
  return (
    <>
        <Router>
          <Navbar/>
            <Routes>
                <Route path='/' element={ <HomePage/> } />
                <Route path='/episodes' element={ <Episodes/> } />
                <Route path='/location' element={ <Location/> } />
                <Route path='*' element={ <Location/> } />
            </Routes>
        </Router>


    </>
  )
}

export default AppRouter