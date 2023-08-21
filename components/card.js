"use client"

export function Card({ date, name }) {
    return (
        <div className='card'>
            <div className='date'>
                {date}
            </div>

            <div className='name'>
                {name}
            </div>
        </div>
    )
}