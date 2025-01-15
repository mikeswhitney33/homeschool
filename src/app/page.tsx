import { pageLinkInfo } from "@/assets/constants"
import Card from "@/components/Card"
import Heading from "@/components/Heading"

export default function Page() {
  return <>
  <div className="">
    <Heading>Homeschool</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {
          pageLinkInfo.filter(({label}) => label != "Home").map(({label, link, imageSrc}) => (
            <Card key={label} label={label} link={link} imageSrc={imageSrc} />
        ))}
      </div>
  </div>

  </>
}
