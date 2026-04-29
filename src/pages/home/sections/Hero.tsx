import Button from "../../../component/ui/Button"
import { HomeContent } from "../../data/content/HomeContent"
function Hero() {
   
  return (
    <div className=''>
    <h1>{HomeContent.homePage.title}</h1>
    <p>{HomeContent.homePage.text}</p>
    <Button to="/About" children="know more" className=" text-black bg-[red] rounded-xl " variant="primary"></Button>
   
    </div>
  )
}

export default Hero