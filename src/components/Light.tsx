import React, {useEffect} from 'react';
import { useState } from 'react'
import styles from './Light.module.css';

export function Light({}) {
    const [red, setRed] = useState(true);
    const [yellow, setYell] = useState(false);
    const [green, setGreen] = useState(false);
    let count = 0;

    useEffect(() => {
        const timerId = setInterval(()=> changeColor(),
            1000
        );
        return () => clearInterval(timerId);
    }, []);

    function changeColor() {
        if (count === 1) {
            setRed(true);
            setYell(false);
            setGreen(false);;
        }
        if (count === 2) {
            setRed(false);
            setYell(true);
            setGreen(false);;
        }
        if (count === 3) {
            setRed(false);
            setYell(false);
            setGreen(true);;
        }
        if (count === 4) {
            setRed(false);
            setYell(true);
            setGreen(false);
        }
        if (count < 4) {
            count++;
        } else {
            count = 1;
        }
    }

    changeColor();

    return <div className={styles.traffic}>
        <div className={red ? styles.red : styles.inactive}></div>
        <div className={yellow ? styles.yellow : styles.inactive}></div>
        <div className={green ? styles.green : styles.inactive}></div>
    </div>;
}
