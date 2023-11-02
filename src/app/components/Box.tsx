"use client"
import { useRef } from "react"

type BoxProps = {
    editible?: boolean
    value?: string | null
    setValue?: ((value: string | null) => void) | null
}

const Box = ({ editible = false, value = null, setValue = null }: BoxProps) => {
    const divRef = useRef<HTMLDivElement>(null)
    return <div
        className={`
            border-orange-300
            border-2
            text-center
            p-4
        `}
        ref={divRef}
        contentEditable={editible}
        onInput={() => {
            if (divRef.current !== null) {
                if (setValue !== null) {
                    setValue(divRef.current.textContent)
                }
            }
        }}
    >
        {value}
    </div>
}


export default Box;