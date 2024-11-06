import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets"


const Sidebar = () => {
  return (
    <div className="w-40 gap-3 py-2">
      <NavLink to="/add">
        <div className="flex gap-3 items-center py-3 bg-gray-300 border border-r-0 px-3 rounded-l">

        <img className="w-5 h-5" src={assets.add_icon} alt="" />
        <p className="hidden md:block">Add Item</p>
        </div>
      </NavLink>

      <NavLink to="/list">
        <div className="flex gap-3 items-center py-3 bg-gray-300 border border-r-0 px-3 rounded-l">

        <img className="w-5 h-5" src={assets.order_icon} alt="" />
        <p className="hidden md:block">List Item</p>
        </div>
      </NavLink>
      <NavLink to="/order">
        <div className="flex gap-3 items-center py-3 bg-gray-300 border border-r-0 px-3 rounded-l">

        <img className="w-5 h-5" src={assets.order_icon} alt="" />
        <p className="hidden md:block">Orders</p>
        </div>
      </NavLink>
    </div>
  )
}

export default Sidebar
