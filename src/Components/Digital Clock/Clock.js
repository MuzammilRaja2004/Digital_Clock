import React from 'react'
import Clk__css from './clock.module.css'
import { useState } from 'react';

function Clock() {
    let ClkTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(ClkTime)

    const ClkTimeUpdte = () => {
        ClkTime=new Date().toLocaleTimeString();
        setTime(ClkTime)
    }
    setInterval(ClkTimeUpdte,1000)

    return (
        <div className={Clk__css.main_div}>
            <h1 className={Clk__css.neon}>{time}</h1>
        </div>
    )
}

export default Clock
