import { PropsWithChildren } from "react";



export default function Heading({children}: PropsWithChildren) {
    return <h1 className="py-6 text-4xl font-bold">
        {children}
    </h1>
}