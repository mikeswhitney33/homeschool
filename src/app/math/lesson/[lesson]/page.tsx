import LESSONS from "@/app/components/lessonImports";
import LessonLayout from "@/app/components/LessonLayout";


export async function generateStaticParams() {
    const lessons = Object.keys(LESSONS)
    return lessons.map((lesson) => {
        return { lesson }
    })
}

export default function Page({ params }: { params: { lesson: number } }) {
    const key = String(params.lesson)
    if (Object.keys(LESSONS).includes(key)) {
        return <LessonLayout lessonKey={key} />
    }
    return <p>Lesson not available yet...</p>
}
