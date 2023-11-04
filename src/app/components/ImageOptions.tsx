"use client"
import Image, { ImageProps } from "next/image"
import { useRef, useState } from "react"
import CheckProblem from "./check"

type ImageOptionsProps = {
    name: string
    options: string[]
    answer: string
    onAnswer: (name: string, correct: boolean) => void
} & ImageProps

export default function ImageOptions({ name, onAnswer, options, answer, alt, ...props }: ImageOptionsProps) {
    const [selected, setSelected] = useState<string>("")
    const checkAnswer = () => {
        const ret = selected.toLowerCase() === answer.toLowerCase()
        onAnswer(name, ret)
        return ret
    }
    const reset = () => {
        setSelected("");
    }
    return <div className="grid grid-cols-3 my-3 border-black border-2">
        <Image alt={alt} {...props} />
        <div className="grid grid-cols-1 items-center">
            {options.map((value, index) => {
                if (selected === value) {
                    return <div
                        key={`${name}${index}`}
                        className="text-blue-500 font-bold cursor-pointer"
                        onClick={() => {
                            setSelected(value)
                        }}
                    >
                        {value}
                    </div>
                }
                else {
                    return <div
                        key={`${name}${index}`}
                        className="hover:text-blue-500 hover:font-bold cursor-pointer"
                        onClick={() => {
                            setSelected(value)
                        }}
                    >
                        {value}
                    </div>
                }

            })}
        </div>
        <CheckProblem checkAnswer={checkAnswer} reset={reset} />
    </div>
}