"use client"
import ThreeDigitGrid from "./ThreeDigitGrid";
import CheckProblem from "./check";
import { useState } from "react";


type ThreeDigitGridProblemProps = {
    start: (number | null)[]
    guess?: (number | null)[]
    gt: (number | null)[]
}

const ThreeDigitGridProblem = ({ gt, guess = [null, null, null], start }: ThreeDigitGridProblemProps) => {
    const [myGuess, setMyGuess] = useState<(number | null)[]>(guess)
    const checkAnswer = () => {
        for (let i = 0; i < 3; i++) {
            if (gt[i] !== myGuess[i]) {
                return false;
            }
        }
        return true
    }
    const reset = () => {
        setMyGuess(guess)
    }
    return <div className="grid grid-cols-[1fr_1fr_auto] gap-5 mb-5">
        <ThreeDigitGrid setDigits={(v) => { }} digits={start} />
        <ThreeDigitGrid setDigits={setMyGuess} digits={myGuess} />
        <CheckProblem checkAnswer={checkAnswer} reset={reset} />
    </div>
}


export default ThreeDigitGridProblem