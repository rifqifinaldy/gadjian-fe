import React from "react";
import classNames from "classnames";
import { NavItem, NavLink, Nav } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { getRoutePath } from "../../utility/get.route";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClose, faHome, faPerson } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ isOpen, toggle }) => {
  //  Ambil lokasi URL dengan memanggil global function getRoutePath
  const currentRoute = getRoutePath(useLocation(), "0");

  // Menu untuk di render
  const menus = [
    { id: 0, page: "Beranda", target: "/home", icon:faHome },
    { id: 1, page: "Personel List", target: "/", icon: faPerson },
    { id: 2, page: "Daily Attendance", target: "/attendance", icon: faCalendar },
  ];

  // Handle Toggle Function Berdasarkan Ukuran Screen
  const changePageHandler = () => {
    if(window.innerWidth < 512){
      toggle()
    }
  }

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        {/* Close Button pada Mobile Menu */}
        <span className="text-secondary" onClick={toggle}>
          <FontAwesomeIcon icon={faClose}/>
        </span>
        {/* LOGO */}
        <h3>Gadjian</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          {menus.map((menu) => {
            return (
              <NavItem key={menu.id} onClick={changePageHandler}>     
                <NavLink
                  tag={Link}
                  to={menu.target}
                   /* Handle Warna Sidebar Menu yang Sedang Active */
                  className={currentRoute === menu.target ? "active-link" : ""}
                >
                  <FontAwesomeIcon className="text-secondary" icon={menu.icon}/> {menu.page}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
      </div>
    </div>
  );
};

export default SideBar;
