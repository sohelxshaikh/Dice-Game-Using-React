import React from 'react'

const TotalScore = ({ score }) => {
    return (
        <div className='w-[13%] flex flex-col items-center h-full'>
            <h1 className='text-8xl transition-transform'>{score}</h1>
            <h2 className='text-[24px]'>Total Score</h2>

        </div>
    )
}

export default TotalScore