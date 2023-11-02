import Box from "./Box"

type ThreeDigitGridProps = {
    digits: (number | null)[]
    setDigits: (value: (number | null)[]) => void
}


const ThreeDigitGrid = ({ digits, setDigits }: ThreeDigitGridProps) => {
    const setH = (value: string | null) => { setDigits([Number(value), digits[1], digits[2]]) }
    const setT = (value: string | null) => { setDigits([digits[0], Number(value), digits[2]]) }
    const setO = (value: string | null) => { setDigits([digits[0], digits[1], Number(value)]) }
    const h = digits[0] === null ? null : String(digits[0])
    const t = digits[1] === null ? null : String(digits[1])
    const o = digits[2] === null ? null : String(digits[2])
    return <div className="grid grid-cols-3 grid-rows-2">
        <Box value={"Hundreds"} />
        <Box value={"Tens"} />
        <Box value={"Ones"} />
        <Box value={h} setValue={setH} editible={digits[0] === null} />
        <Box value={t} setValue={setT} editible={digits[1] === null} />
        <Box value={o} setValue={setO} editible={digits[2] === null} />
    </div>
}

export default ThreeDigitGrid
