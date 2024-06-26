import React from "react";

const Time = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    
    return (
        <div>
            <h1>년 : {year}</h1>
            <h1>월/일 : {month}/{date}</h1>
            <h1>시간 : {hour}시 {min}분 {sec}초</h1>
        </div>
    );
};

export default Time;