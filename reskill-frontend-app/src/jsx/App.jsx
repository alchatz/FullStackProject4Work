import { useState } from 'react'
import '../css/App.css'
import Homepage from './Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Homepage />
      </div>
    </>
  )
}

export default App
