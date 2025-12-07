// Second timer option that uses jsx

import React, { useState, useEffect } from 'react';

function TimerApp() { // Change function to export and App to a different name
    const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState("work"); // 'work' or 'break'
    const [cycles, setCycles] = useState(0);

 useEffect(() => {
    let timer;
    if (isRunning) {
        timer = setInterval(() => {
            setTime((prev) => {
                if (prev === 1) {
                    handleTimerEnd();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }
    return () => clearInterval(timer);
 }, [isRunning]);

 const handleTimerEnd = () => {
    setIsRunning(false);
    if (mode === "work") {
        setMode("break");
        setTime(5 * 60); // 5 minutes break
    } else {
        setMode("work");
        setTime(25 * 60); // 25 minutes work
        setCycles((c) => c + 1);
    }
};

const formatTime = () => {
    const mins = Math.floor(time / 60).toString().padStart(2,"0");
    const secs = (time % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
};

const handleReset = () => {
    setIsRunning(false);
    setTime(mode === 'work' ? 25 * 60 : 5 * 60);
 };

 return (
    <div style={styles.container}>
        <h2>{mode === "work" ? "Work Time" : "Break Time"}</h2>
        <div style={styles.timer}>{formatTime()}</div>
        <div style={styles.buttons}>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
        <p>Pomodoro's Completed: {cycles}</p>
    </div>
 );
}

const styles = {
 container: {
    display: 'sans=serif',
    textAlignL: 'center',
    marginTop: '50px',
 },
 timer: {
    fontSize: '48px',
    margin: '20px',
 },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
    },
};

export default TimerApp;