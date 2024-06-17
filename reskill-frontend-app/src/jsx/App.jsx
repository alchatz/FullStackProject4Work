import { useState } from 'react'
import '../css/App.css'
import Homepage from './Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div class='page-padding'>
        <Homepage />
      </div>
    </div>
  )
}

export default App
