import { assets } from "../../assets/assets"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
        <img src={assets.logo} alt="logo" className="logo" />
        <ul className="navbar-menu">
        <li className="">home</li>
        <li className="">menu</li>
        <li className="">mobile-app</li>
        <li className="">contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search_icon" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="basket" />
                <div className="dot"></div>
            </div>
            <button>sign in</button>

        </div>

    </div>
  )
}

export default Navbar