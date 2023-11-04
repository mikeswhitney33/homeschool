import Lesson34 from "./lessons/lesson34"
import Lesson36 from "./lessons/lesson36"

const LESSONS: { [value: string]: any } = {
    "34": {
        component: Lesson34,
        maxPages: 5,
        name: "Add and Subtract 10 and 100.",
        unit: 2
    },
    "36": {
        component: Lesson36,
        maxPages: 2,
        name: "Inches, Feet, and Yards",
        unit: 2
    }
}

export default LESSONS
