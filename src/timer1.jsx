// First timer option that uses tsx (have to translate if want to keep)

import { use, useEffect, useState } from 'react';

export default function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        if (timeLeft === 0) return;

        const timeout = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [timeLeft]);

    function start(seconds= 60) {
        setTimeLeft(seconds);
    }

    return { timeLeft, start };
}

