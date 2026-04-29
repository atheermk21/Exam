import Card from "../../../component/ui/Card"
import { HomeContent } from "../../data/content/HomeContent"
import { CarsData } from "../../data/content/HomeContent"
function Services() {
  return (
    <div className="grid grid-colse-1 md:grid-cols-3 gap-6 p-6 h-full w-fuul" >
      {CarsData.map((card)=>
      (
      <Card
      key={card.id}
      id={card.id}
      title={card.description}
      />
      ))}
    </div>
  )
}

export default Services