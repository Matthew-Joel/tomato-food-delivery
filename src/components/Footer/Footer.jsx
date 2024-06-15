import "./Footer.css"
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repudiandae reiciendis illo iure tempore minima laudantium temporibus, maiores facilis facere, ipsam nostrum, optio maxime. Aperiam corporis reiciendis praesentium cum dolores!</p>
                    <div className="footer-socials-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+234-813-156-3610</li>
                        <li>contact@joelmathew826.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 @ Tomato.com - All right reserved.</p>
        </div>
    </div>
  )
}

export default Footer