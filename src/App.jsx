import HomeLogic from './views/home/HomeLogic'
import IntergalacticBirthday from './views/home/IntergalacticBirthday'
import SomePicsLogic from './views/someDates/SomePicsLogic'
import { Route, Routes } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomeLogic/>}/>
      <Route path='/intergalacticbirthday' element={<IntergalacticBirthday/>}/>
      <Route path='/somedates' element={<SomePicsLogic/>}/>
      <Route path="*" element={<HomeLogic/>} />
    </Routes>
    </>
  )
}

export default App
