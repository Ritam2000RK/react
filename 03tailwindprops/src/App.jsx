import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-2 rounded-xl'>Hello there!</h1>
      <Card username="Ritam" btn="Click here"/>
      <Card username="Laxmi" />
    </>
  )
}

export default App
