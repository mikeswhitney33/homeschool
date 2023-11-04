"use client"
import Image, { ImageProps } from "next/image"
import CheckProblem from "./check"
import { useRef } from "react"

type ImageQuestionProps = {
    answers: string[]
    qName: string
    onAnswer: (name: string, correct: boolean) => void
} & ImageProps

export default function ImageQuestion({ qName, onAnswer, answers, alt, className, ...props }: ImageQuestionProps) {
    const input = useRef<HTMLInputElement>(null)
    function checkAnswer() {
        let ret = false
        if (input.current !== null) {
            ret = answers.includes(input.current.value)
        }
        onAnswer(qName, ret)
        return ret
    }
    function reset() {
        if (input.current !== null) {
            input.current.value = ""
        }
    }
    return <div className="grid gap-3 grid-cols-[auto_1fr_auto] w-fit">
        <Image className={"self-center" + className} {...props} alt={alt} />
        <input className="self-center justify-self-center" type="text" ref={input} />
        <CheckProblem checkAnswer={checkAnswer} reset={reset} />
    </div>
}