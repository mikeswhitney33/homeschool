"use client"
import Image from "next/image"
import { useState } from "react"

type CheckProblemProps = {
    checkAnswer: () => boolean
    reset: () => void
}

const CheckProblem = ({ checkAnswer, reset }: CheckProblemProps) => {
    const [src, setSrc] = useState<string>("/question-mark.svg")
    const [needsRestart, setNeedsRestart] = useState<boolean>(false)
    return <div
        className="self-center cursor-pointer"
        onClick={() => {
            if (needsRestart) {
                setSrc("/question-mark.svg")
                reset()
                setNeedsRestart(false)
            }
            else {
                if (checkAnswer()) {
                    setSrc("/green-check.svg")
                }
                else {
                    setNeedsRestart(true)
                    setSrc("/restart.svg")
                }
            }
        }}
    >
        <Image src={src} width={64} height={64} alt="Check" />
    </div >
}


export default CheckProblem