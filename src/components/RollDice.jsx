import React, { useState } from 'react'

const RollDice = ({
    currentDice,
    rollDice,
    setScore
}) => {





    return (
        <div className='h-[449px]   absolute left-[50%] top-[60%] -translate-x-[50%] -translate-y-[50%] w-[250px]'>
            <div className='flex items-center flex-col'>
                <img onClick={rollDice} className="cursor-pointer" src={`/images/dice_${currentDice}.png`} alt="" />
                <h1 className='text-[24px] '>Click on Dice to roll</h1>

                <button onClick={() => setScore(0)} className='border-2 w-[220px] mt-8 rounded-md h-[44px] border-black bg-white text-black'>Reset Score</button>
                <button className='w-[220px] mt-5 rounded-md h-[44px] bg-black text-white' >Show Rules</button>
            </div>
        </div>
    )
}

export default RollDice