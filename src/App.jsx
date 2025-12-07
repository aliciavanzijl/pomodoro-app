
import './App.css'
import ButtonAppBar from './ButtonAppBar'
import TimerApp from './timer2.jsx'
import VisualTimer from './VisualTimer.jsx'
import NavBar from './NavBar.jsx'
import { Route, Routes } from "react-router-dom"


function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
    <div className='navigation-box'>
      <div className="navigation-bars">
        <ButtonAppBar />
        <h1>The Best Pomodoro Timer Ever</h1>
        <NavBar />
      </div>
    </div> 
    <div className="timers">
      <Routes>
        <Route path="/" element={<TimerApp />} />
        <Route path="/visualtimer" element={<VisualTimer />} />
      </Routes>
    </div>
    </>
  )
}

export default App

