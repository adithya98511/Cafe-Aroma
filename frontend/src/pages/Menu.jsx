import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { Link } from "react-router-dom";
import Order from "./Order";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>

      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div className="menu-card">
              <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price} />
              <Link to={`/order/${menuItem.id}`}>
                <button className="menu-btn">ORDER NOW</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
