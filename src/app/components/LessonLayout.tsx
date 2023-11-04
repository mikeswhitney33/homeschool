"use client"
import { useState } from "react"
import LESSONS from "./lessonImports"
import SubjectHeader from "./SubjectHeader"
import LessonSection from "./LessonSection"

type PageProps = {
    lessonKey: string
}

export default function LessonLayout({ lessonKey }: PageProps) {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [locked, setLocked] = useState<boolean>(true)
    const lesson = LESSONS[lessonKey]
    const Component = lesson.component
    const maxPages = lesson.maxPages + 1
    return <div className="container mx-auto h-full grid grid-rows-[1fr_auto]">
        <div>
            <a href="/" className="cursor-pointer px-2 py1 bg-blue-500 hover:bg-blue-400 inline-block rounded mt-3">Back</a>
            <SubjectHeader>Lesson {lessonKey}: {lesson.name}</SubjectHeader>
            <Component setLocked={setLocked} currentPage={currentPage} />
            <LessonSection currentPage={currentPage} pageNum={maxPages}>
                <h1 className="text-center text-7xl mb-5">Congratulations!</h1>
                <div className="grid grid-cols-1 h-full">
                    <a
                        href="https://coolmathgames.com"
                        target="_blank"
                        className="
                        self-center
                        bg-blue-500
                        px-2
                        py-1
                        rounded
                        hover:bg-blue-400
                        mx-auto
                        inline-block
                        "
                    >Cool Math Games!</a>
                </div>

            </LessonSection>
        </div>
        <div className="grid grid-cols-3 p-5">
            {currentPage > 1
                ? <div
                    className="
                    justify-self-center
                    px-2 py-1
                    bg-blue-500
                    rounded
                    cursor-pointer
                    hover:bg-blue-400
                "
                    onClick={() => {
                        setCurrentPage(currentPage - 1)
                    }}
                >Previous</div>
                : <div></div>
            }
            <p className="text-center">{currentPage} out of {maxPages}</p>
            {currentPage < maxPages
                ? <div
                    className={`
                    justify-self-center
                    px-2
                    py-1
                    rounded
                    cursor-pointer
                    ${locked
                            ? `bg-gray-300`
                            : `bg-blue-500
                        hover:bg-blue-400`
                        }

                `}
                    onClick={() => {
                        if (!locked) {
                            setCurrentPage(currentPage + 1)
                            setLocked(true)
                        }
                    }}
                >Next</div>
                : <div></div>
            }
        </div>
    </div>
}