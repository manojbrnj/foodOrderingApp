import React from "react";
import MenuItem from "../components/MenuItem";
import { Data } from "../data/data";
import "../styles/Menu.css";
function Menu(props) {
  return (
    <div className="menu">
      <div className="menuTitle">
        <div className="menuList">
          {Data.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                name={menuItem.name}
                price={menuItem.price}
                image={menuItem.image}
              ></MenuItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
