
import { PropsWithChildren } from "react"

export default function P({ children }: PropsWithChildren) {
    return <p className="mb-3">
        {children}
    </p>
}