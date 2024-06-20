import { assets } from "../../assets/assets"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-options">
            <div className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Order</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar