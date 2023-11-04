import { PageProps } from "../types"
import LessonSection from "../LessonSection"
import TTSParagraph from "../tts"
import P from "../P"
import Image from "next/image"
import ImageQuestion from "../ImageQuestion"
import ImageOptions from "../ImageOptions"


export default function Page({ currentPage, setLocked }: PageProps) {
    const scores: { [key: string]: boolean[] } = {
        "1": [false, false, false],
        "2": [false, false, false, false, false, false]
    }
    const onAnswer = (name: string, correct: boolean) => {
        const [section, index1] = name.split(".")
        const index = parseInt(index1) - 1
        scores[section][index] = correct
        if (!scores[section].includes(false)) {
            setLocked(false)
        }
        else {
            setLocked(true)
        }
    }
    return <div>
        <LessonSection pageNum={1} currentPage={currentPage} >
            <TTSParagraph src="/audio/lesson36.1.wav">
                <P>
                    Lily is helping her dad in his woodworking shop.
                    Her dad gives her a 12-inch ruler, a yardstick, and a measuring
                    tape. These are all tools that help measure length.
                </P>
                <P>
                    Look at the ruler on this page. It is the actual length of a 12-inch
                    ruler. Do you see how each of the 12 inches is marked with a
                    number? The longer tick mark between two numbers is the
                    half-inch mark.  point to the half-inch mark between 2 and 3.
                    Lily&apos;s dad asks Lily to find a 1-inch nail. To
                    measure an item in inches with a ruler, you place the
                    ruler&apos;s edge (or the number 0 if it includes it) at one
                    end of the item. Then you see where the other
                    end of the item lands on the ruler. What is
                    the length of each
                    nail?
                </P>
            </TTSParagraph>
            <ImageQuestion
                qName="1.1"
                onAnswer={onAnswer}
                className="object-cover object-left w-[144px] h-[48px]"
                width={144}
                height={48}
                src="/nail.png"
                answers={["1"]} alt="nail" />
            <ImageQuestion
                qName="1.2"
                onAnswer={onAnswer}
                className="object-cover object-left w-[230px] h-[48px]"
                width={216}
                height={48}
                src="/nail.png"
                answers={["1.5", "1 1/2",]} alt="nail" />
            <ImageQuestion
                qName="1.3"
                onAnswer={onAnswer}
                className="object-cover object-left w-[318px] h-[48px]"
                width={288}
                height={48}
                src="/nail.png"
                answers={["2"]} alt="nail" />
            <Image className="object-cover object-left w-full h-[278px]" src="/ruler.jpg" width={1992} height={278} alt="ruler" />
        </LessonSection>
        <LessonSection pageNum={2} currentPage={currentPage} >
            <TTSParagraph src="/audio/lesson36.2.wav">
                <P>
                    There are 12 inches in a foot. Do you think a spoon would be
                    more or less than a foot? Do you think you are more or less than one foot tall?
                    What about a mouse? Can you think of an animal that would be longer than a
                    foot? The average baby is 20 inches when he or she is born. Is the average baby
                    more or less than one foot when he or she is born?
                </P>
                <P>
                    A yard is 36 inches long, which is three feet—about the length of a guitar. A
                    yardstick measures one yard. A yardstick is the length of three 12-inch
                    rulers put together. If you are measuring something that is 6
                    feet long, would it be faster to use a ruler or a yardstick?
                    It makes sense to measure longer distances
                    with yards. For example, people in the US usually
                    measure football fields in yards. A football field
                    is 100 yards long.
                </P>
                <P>
                    Measuring tapes have varying
                    lengths, but many are at least
                    60 inches long.
                </P>
            </TTSParagraph>
            <TTSParagraph src="/audio/lesson36.3.wav">
                Click on the unit of measurement that would make the most sense to use when measuring the length of each object shown.
            </TTSParagraph>
            <ImageOptions onAnswer={onAnswer} answer={"inches"} name="2.1" width={128} height={128} src="/images/36/lesson36.1.png" alt="bird" options={["Inches", "Feet"]} />
            <ImageOptions onAnswer={onAnswer} answer={"feet"} name="2.2" width={128} height={128} src="/images/36/lesson36.2.png" alt="bird" options={["Inches", "Feet"]} />
            <ImageOptions onAnswer={onAnswer} answer={"feet"} name="2.3" width={128} height={128} src="/images/36/lesson36.3.png" alt="bird" options={["Inches", "Feet"]} />
            <ImageOptions onAnswer={onAnswer} answer={"inches"} name="2.4" width={128} height={128} src="/images/36/lesson36.4.png" alt="bird" options={["Inches", "Feet"]} />
            <ImageOptions onAnswer={onAnswer} answer={"feet"} name="2.5" width={128} height={128} src="/images/36/lesson36.5.png" alt="bird" options={["Inches", "Feet"]} />
            <ImageOptions onAnswer={onAnswer} answer={"feet"} name="2.6" width={128} height={128} src="/images/36/lesson36.6.png" alt="bird" options={["Inches", "Feet"]} />
        </LessonSection>
    </div>
}