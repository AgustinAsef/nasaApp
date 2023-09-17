import HomeLogic from './logic/HomeLogic'
import IntergalacticBirthday from './logic/IntergalacticBirthday.jsx'
import SomePicsLogic from './logic/SomePicsLogic'
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
