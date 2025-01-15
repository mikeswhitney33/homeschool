import Heading from "@/components/Heading";
import { pageLinkInfo } from "./links";
import Card from "@/components/Card";

export default function Page() {
    return (
        <div>
            <Heading>Math</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {
                pageLinkInfo.filter(({label}) => label != "Home").map(({label, link, imageSrc}) => (
                    <Card key={label} label={label} link={link} imageSrc={imageSrc} />
                ))}
            </div>
        </div>
    )
}