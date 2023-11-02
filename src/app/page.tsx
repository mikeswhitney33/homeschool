import _lessons from '../data/lessons.json'
import { PropsWithChildren } from 'react'
import Link from 'next/link'
import SubjectHeader from './components/SubjectHeader'

type InputProps = {
  value: number
}
const Input = ({ value }: InputProps) => {
  return <input className="w-5 text-center text-black" value={value} />
}

type Lesson = {
  name: string
  available: boolean
  maxPages?: number
}

type Unit = {
  lessons: Lesson[]
}

type Subject = {
  units: Unit[]
}

type LessonContents = {
  math: Subject
}


const UnitHeader = ({ children }: PropsWithChildren) => {
  return <h2 className="text-2xl ml-4">{children}</h2>
}

type LessonItemProps = {
  available: boolean
  href: string
}

const LessonItem = ({ children, available, href }: PropsWithChildren<LessonItemProps>) => {

  return <li className="list-none ml-8">
    {
      available
        ? <Link className="text-blue-500 hover:text-blue-400" href={href}>{children}</Link>
        : <p>{children}</p>
    }
  </li>
}

export default function Home() {
  const lessons: LessonContents = _lessons
  let total = 0
  return (
    <main className="mx-auto container">
      <SubjectHeader>Math</SubjectHeader>
      {lessons.math.units.map((value, index) => {
        return <>
          <UnitHeader>Unit {index + 1}</UnitHeader>
          <ul>
            {value.lessons.map((lesson, lIndex) => {
              total += 1;
              return <>
                <LessonItem
                  href={`/math/lesson/${total}`}
                  available={lesson.available}
                >
                  Lesson {total}: {lesson.name}
                </LessonItem >
              </>
            })}
          </ul>
        </>
      })}
    </main >
  )
}
