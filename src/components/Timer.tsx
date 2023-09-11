import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [laps, setLaps] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const handleStart = () => {
    if (!isRunning) {
      const newStartTime = new Date().getTime() - (laps.length > 0 ? laps.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) * 1000 : 0);
      setStartTime(newStartTime);
      setIsRunning(true);
      const newIntervalId = setInterval(updateTimer, 10);
      setIntervalId(newIntervalId);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      if (intervalId) {
        clearInterval(intervalId);
      }
      const endTime = new Date().getTime();
      const elapsedTime = (endTime - (startTime || 0) + (laps.length > 0 ? laps.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) * 1000 : 0)) / 1000;
      setLaps([...laps, elapsedTime.toFixed(2)]);
      setIsRunning(false);
      setCurrentTime(elapsedTime);
    }
  };

  const updateTimer = () => {
    const endTime = new Date().getTime();
    const elapsedTime = (endTime - (startTime || 0) + (laps.length > 0 ? laps.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) * 1000 : 0)) / 1000;
    setCurrentTime(elapsedTime);
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const totalSeconds = laps.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
  const displayTime = isRunning
    ? (currentTime).toFixed(2)
    : totalSeconds.toFixed(2);

  return (
    <div>
      <div>
        <h1>Таймер</h1>
        <p>{displayTime} секунд</p>
      </div>
      <div>
        {!isRunning ? (
          <button onClick={handleStart}>Старт</button>
        ) : (
          <button onClick={handleStop}>Стоп</button>
        )}
      </div>
      <div>
        <h2>Фиксированные круги</h2>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>{`Круг ${index + 1}: ${lap} секунд`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Timer;
