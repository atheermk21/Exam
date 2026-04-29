
import{Link} from "react-router-dom"
import { ROUTES } from '../../contanet/router'



function NavBar() {
  return (
   
    <div  className=" bg-[red]  ">
        <ul className="flex items-center justify-center gap-6">
            <li><Link to={ROUTES.HOME}>Home</Link></li>
            <li><Link to={ROUTES.ABOUT}>About</Link></li>
             <li><Link to={ROUTES.CONTACT}>Contact</Link></li>
        </ul>
    </div>
  )
}

export default NavBar