import React, { useState } from 'react'

const NumberSelector = ({
    selectedNumber, SetSelectedNumber, error, setError
}) => {

    const arrNum = [
        1, 2, 3, 4, 5, 6
    ]
    const setNumberSelectorHandler = (value) => {
        SetSelectedNumber(value)
        setError("")
    }


    return (
        <div className='h-full relative w-[552px] '>
            <h1 className=' absolute -top-5 text-red-600 font-semibold text-[20px]'> {error}</h1>
            <div className='flex  gap-5 mt-4 items-center justify-between'>
                {
                    arrNum.map((value, i) => <div

                        key={i}
                        className={`box w-[72px]  transition-all duration-300 cursor-pointer flex  items-center justify-center h-[72px] text-black border-2 border-black ${selectedNumber === value ? 'bg-black text-white' : 'bg-white text-black'
                            }`}
                        onClick={() => setNumberSelectorHandler(value)}
                    >
                        <h1 className={` text-5xl font-normal ${selectedNumber === value ? 'text-white' : 'text-black'}`}>{value}</h1>
                    </div>)
                }


            </div>
            <div className='flex items-center justify-center py-4'>
                <h1 className='font-semibold text-xl text-black uppercase'>Select Number</h1>
            </div>

        </div>
    )
}

export default NumberSelector