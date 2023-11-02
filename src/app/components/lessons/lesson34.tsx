
import TTSParagraph from "../tts"
import ThreeDigitProblem from "../ThreeDigitProblem"
import LessonSection from "../LessonSection"


type PageProps = {
    currentPage: number
}


export default function Page({ currentPage }: PageProps) {
    return <>
        <LessonSection pageNum={1} currentPage={currentPage} >
            <TTSParagraph src="/audio/lesson34.1.wav">
                To add 10 to a number, we increase the digit in the tens
                place by one. The number 784 is on the first chart. Point to the digit in the
                tens place. In the next chart, write the sum of 784 + 10 by increasing
                the digit in the tens place by one.
            </TTSParagraph>
            <ThreeDigitProblem gt={[7, 9, 4]} guess={[7, null, 4]} start={[7, 8, 4]} />
        </LessonSection>
        <LessonSection pageNum={2} currentPage={currentPage} >
            <TTSParagraph src="/audio/lesson34.2.wav">
                Add 10 to each number by increasing the digit in the tens place by one.
            </TTSParagraph>
            <ThreeDigitProblem gt={[6, 5, 3]} start={[6, 4, 3]} />
            <ThreeDigitProblem gt={[3, 1, 5]} start={[3, 0, 5]} />
            <ThreeDigitProblem gt={[null, 3, 9]} start={[null, 2, 9]} />
        </LessonSection>
        <LessonSection pageNum={3} currentPage={currentPage} >
            <TTSParagraph src="/audio/lesson34.3.wav">
                To subtract 10 from a number, we decrease the digit in
                the tens place by one. Subtract 10 from each number by decreasing the
                digit in the tens place by one.
            </TTSParagraph>
            <ThreeDigitProblem gt={[5, 6, 1]} start={[5, 7, 1]} />
            <ThreeDigitProblem gt={[8, 8, 0]} start={[8, 9, 0]} />
        </LessonSection>
        <LessonSection pageNum={4} currentPage={currentPage} >
            <TTSParagraph src="/audio/lesson34.4.wav">
                To add 100 to a number, we increase the digit in
                the hundreds place by one. Add 100 to each number by increasing the
                digit in the hundreds place by one.
            </TTSParagraph>
            <ThreeDigitProblem gt={[5, 2, 9]} start={[4, 2, 9]} />
            <ThreeDigitProblem gt={[3, 8, 6]} start={[2, 8, 6]} />
        </LessonSection>
        <LessonSection pageNum={5} currentPage={currentPage} >
            <TTSParagraph src="/audio/lesson34.5.wav">
                To subtract 100 from a number, we decrease the digit in
                the hundreds place by one. Subtract 100 from each number by decreasing
                the digit in the hundreds place by one.
            </TTSParagraph>
            <ThreeDigitProblem gt={[4, 7, 1]} start={[5, 7, 1]} />
            <ThreeDigitProblem gt={[7, 9, 0]} start={[8, 9, 0]} />
        </LessonSection>
    </>
}