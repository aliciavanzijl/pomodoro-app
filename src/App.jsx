import { useState } from 'react'

import './App.css'
import ButtonAppBar from './ButtonAppBar'

export function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ButtonAppBar />
      <h1>The Best Pomodoro Timer Ever</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Starting template for an epic app
        </p>
      </div>
      <p className="read-the-docs">
        Leaving this text here - see App.cs to see the custom class
      </p>
    </>
  )
}

export default App
