import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuList } from "../helpers/MenuList";
import "../styles/Menu.css";

import MenuItem from "../components/MenuItem";

function Order() {
  const { menuid } = useParams();

  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>

        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            if (menuItem.id == menuid) {
              return (
                <div className="menu-card">
                  {/* <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price} /> */}
                  <div className="menuItem">
                    <div style={{ backgroundImage: `url(${menuItem.image})` }}> </div>
                    <h1> {menuItem.name} </h1>
                    <p> {menuItem.price} </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Order;
