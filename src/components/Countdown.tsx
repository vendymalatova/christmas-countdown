import styles from "./Countdown.module.css";
import Snowfall from "react-snowfall";
import { useEffect, useState } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const finishDate = new Date("2026-12-24T00:00:00");
    const finishDateMs = finishDate.getTime();

    const updateCountdown = () => {
      const dateDiff = finishDateMs - Date.now();
      const totalSeconds = Math.max(0, Math.floor(dateDiff / 1000));

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown();

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Snowfall />
      <h1 className={styles.heading}>CHRISTMAS COUNTDOWN</h1>
      <div className={styles.container}>
        <div className={styles.boxContainer}>
          <div className={styles.number}>{countdown.days}</div>
          <div className={styles.time}>DAYS</div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.number}>{countdown.hours}</div>
          <div className={styles.time}>HOURS</div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.number}>{countdown.minutes}</div>
          <div className={styles.time}>MINUTES</div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.number}>{countdown.seconds}</div>
          <div className={styles.time}>SECONDS</div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
