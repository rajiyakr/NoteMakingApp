import { useState } from 'react'
import Form1 from './components/form1'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Form1/>
    </>
  )
}

export default App
