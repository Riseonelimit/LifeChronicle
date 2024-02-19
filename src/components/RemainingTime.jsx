import React, { useEffect, useState } from 'react'
import { useUser } from '../hooks/customHook'

const RemainingTime = () => {

    const user = useUser()
    const targetDate = new Date(user.day_timer)

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      // console.log(difference);
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearTimeout(timer);
    });
  
    const formatTime = (time) => (time < 10 ? `0${time}` : time);
    
    // console.log(Object.keys(timeLeft));
  return (
    <>{timeLeft && Object.keys(timeLeft).length ?
        (
          <p>
            {`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
          </p>
        ) : (
          <p>You can write for Day {user.current_day}!</p>
        )
      }</>
  )
}

export default RemainingTime