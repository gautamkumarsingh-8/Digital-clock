import React, { useState } from 'react';

const Digitalclock = () => {
    const curTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(curTime);

    const update = () => {
        const curTime = new Date().toLocaleTimeString();
        setTime(curTime);
    }

    setInterval(() => {
        update()
    }, 1000)
    return (

        <div>
            <h1 style={{ textAlign: "center", color: "red", fontSize: "70px" }} >Digital Clock</h1>

            <h1 style={{ textAlign: "center", fontSize: "60px" }}  >{time}</h1>

        </div>
    )
}

export default Digitalclock;