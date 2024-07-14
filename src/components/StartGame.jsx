import React from 'react'
import dice from '/images/dice.png'
const StartGame = ({ toggle }) => {
    return (
        <div className='h-screen w-full flex items-center justify-center bg-white'>
            <div className='flex items-center justify-center  '>
                <div>
                    <img src={dice} alt="" />
                </div>
                <div className='' >
                    <h1 className='uppercase text-black font-semibold text-8xl'> Dice Game</h1>

                    <button onClick={toggle} className='bg-black font-bold text-white px-9 mt-5 border-none rounded-md py-3 hover:scale-105'>Play game</button>

                </div>
            </div>
        </div>
    )
}

export default StartGame

