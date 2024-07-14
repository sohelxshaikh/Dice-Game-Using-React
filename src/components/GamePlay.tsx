import React, { useState } from 'react'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';

const GamePlay = ({ toggle }) => {
    const [selectedNumber, SetSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");



    const generateRandom = () => {
        return Math.floor(Math.random() * 6) + 1;

    };

    const rollDice = () => {

        // console.log(random);
        const random = generateRandom();

        setCurrentDice((prev) => random)
        if (!selectedNumber) {
            setError("You have not selected any number")
            return;
        }



        if (random === selectedNumber) {
            setScore((prev) => prev + random);
        } else {
            setScore((prev) => prev - 2);
        }
        SetSelectedNumber(undefined)

    }

    return (
        <div className='w-full  h-screen relative'>
            <div className='w-[1280px] flex  justify-between absolute mt-10 left-[50%] -translate-x-[50%] h-[151px]'>
                <TotalScore score={score} />
                <NumberSelector
                    error={error}
                    selectedNumber={selectedNumber}
                    SetSelectedNumber={SetSelectedNumber}
                    setError={setError}
                />
            </div>
            <RollDice
                currentDice={currentDice}
                rollDice={rollDice}
                setScore={setScore}
            />

            {/* <button onClick={toggle}>Home PAge</button> */}
        </div>
    )
}

export default GamePlay