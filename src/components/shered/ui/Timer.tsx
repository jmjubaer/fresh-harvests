"use client";
import React from "react";
import { useTimer } from "react-timer-hook";

type MyTimerProps = {
    expiryTimestamp: Date;
};

export function MyTimer({ expiryTimestamp }: MyTimerProps) {
    const {
        totalSeconds,
        milliseconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn("onExpire called"),
        interval: 20,
    });

    return (
        <div>
            <div className='flex items-center gap-6 mt-8 z-10'>
                <div className='p-7 pb-3 text-center bg-white rounded-lg w-fit '>
                    <span className='block text-[40px]'>0{days}</span>
                    <span className='text-lg text-secondary'>Days</span>
                </div>
                <div className='p-7 pb-3 text-center bg-white rounded-lg w-fit '>
                    <span className='block text-[40px]'>{hours}</span>
                    <span className='text-lg text-secondary'>Hour</span>
                </div>
                <div className='p-7 pb-3 text-center bg-white rounded-lg w-fit '>
                    <span className='block text-[40px]'>{minutes}</span>
                    <span className='text-lg text-secondary'>Min</span>
                </div>
                <div className='p-7 pb-3 text-center bg-white rounded-lg w-fit '>
                    <span className='block text-[40px]'>{seconds}</span>
                    <span className='text-lg text-secondary'>Second</span>
                </div>
            </div>
        </div>
    );
}
