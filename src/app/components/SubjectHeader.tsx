import { PropsWithChildren } from "react"

const SubjectHeader = ({ children }: PropsWithChildren) => {
    return <>
        <h1 className="text-4xl text-center my-5">
            {children}
        </h1>
        <hr className="mb-5" />
    </>
}

export default SubjectHeader