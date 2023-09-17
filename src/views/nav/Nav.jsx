import nasaImgLogo from "../images/nasaLogo.png"
import { Link } from "react-router-dom"
import "./nav.css"

function Nav() {

/*   const [menuOpen, setMenuOpen] = useState(false);

  function  toggleNavMenu() {
    setMenuOpen(!menuOpen);
  } */
  return (
    <div className="navDivContainer">
        <Link to={'/home'} className="m navDivTittle">
          <img src={nasaImgLogo} className="navTierraImg" alt="" />
          <h1>NASAapi</h1>            
        </Link>
        <div className="navDivButtonsContainer">
          <Link to='/intergalacticbirthday'><button className="button buttonNav m"><p className="navButtonP">intergalactic birthday</p></button></Link>
          <Link to='/somedates'><button className="button buttonNav m"><p className="navButtonP">Some picks</p></button></Link>
        </div>
    </div>
  )

}

export default Nav
