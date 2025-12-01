import { useState } from 'react'
import { useEffect } from 'react';

import './App.css'
import ButtonAppBar from './ButtonAppBar'
import TimerApp from './timer2.jsx'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
    <ButtonAppBar />
      <h1>The Best Pomodoro Timer Ever</h1>
      <div className="card">
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

