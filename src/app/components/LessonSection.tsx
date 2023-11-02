import { PropsWithChildren } from "react"

type LessonSectionProps = {
    currentPage: number
    pageNum: number
}

const LessonSection = ({ pageNum, currentPage, children }: PropsWithChildren<LessonSectionProps>) => {
    if (pageNum !== currentPage) {
        return null
    }
    return <>
        <div className="">
            <div className="">
                {children}
            </div>
        </div>
    </>
}

export default LessonSection