
import { useState } from 'react';
import './VisualTimer.css'

const ONE_SECOND_MS = 1000
const ONE_MINUTE_MS = ONE_SECOND_MS * 60
const DEFAULT_ELAPSED = 0
const getNumOrZero = num => Math.floor(Math.max(0,num))

function VisualTimer() {

    const [ elapsed, setElapsed ] = useState(DEFAULT_ELAPSED)

    const wholeSecondsValue = getNumOrZero((elapsed % ONE_MINUTE_MS ) / ONE_SECOND_MS);
    const secondsRotation = wholeSecondsValue * 6; // maths to adjust

    return (
        <div class="clock-container">
            <div class="clock">
                <Hand className="hand" value={secondsRotation} />
            </div>
        </div>
    );

};

const Hand = ({className, value}) => (
    <div 
    className={`hand ${className}`}
    style={{ transform: `translateX(-50%) rotate(${value}deg)` }}
    />
)


export default VisualTimer;