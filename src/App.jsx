import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FuctionalInput from './components/FuctionalInput'
import ClassInput from './components/ClassInput'
import Greeting from './components/Greeting'
import { ThemeContext } from './components/Panel'
import Form from './components/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeContext.Provider value="dark">
      <Form/>
    </ThemeContext.Provider>
  )
}

export default App
