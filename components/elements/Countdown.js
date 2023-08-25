import { useEffect, useState } from "react"

const msInSecond = 1000
const msInMinute = 60 * 1000
const msInAHour = 60 * msInMinute
const msInADay = 24 * msInAHour

const getPartsofTimeDuration = (duration) => {
    const days = Math.floor(duration / msInADay)
    const hours = Math.floor((duration % msInADay) / msInAHour)
    const minutes = Math.floor((duration % msInAHour) / msInMinute)
    const seconds = Math.floor((duration % msInMinute) / msInSecond)

    return { days, hours, minutes, seconds }
}

const Countdown = (endDateTime) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const timeout = setTimeout(() => {
            const date = new Date()
            setTime(date.toLocaleTimeString())
        }, 1000)
        return () => {
            clearTimeout(timeout)
        }
    }, [time])

    const now = Date.now() // Number of milliseconds from begining of time

    const future = new Date(endDateTime.endDateTime) // The day we leave for Japan

    const timeDif = future.getTime() - now
    const timeParts = getPartsofTimeDuration(timeDif)

    return (
        <>


            <div className="item">
                <span>{timeParts.days}</span>
                <p>days</p>
                <small className="cuot">:</small>
            </div>
            <div className="item">
                <span>{timeParts.hours}</span>
                <p>hours</p>
                <small className="cuot">:</small>
            </div>
            <div className="item">
                <span>{timeParts.minutes}</span>
                <p>minutes</p>
                <small className="cuot">:</small>
            </div>
            <div className="item">
                <span>{timeParts.seconds}</span>
                <p>seconds</p>
            </div>
        </>
    )
}

export default Countdown