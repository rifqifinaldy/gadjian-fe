import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navbar as TopNav } from "reactstrap";
import Avatar from "../Avatar/Avatar";

const Navbar = ({ toggleSidebar }) => {
  return (
    <TopNav
      color="light"
      light
      className="navbar shadow-sm p-3 mb-2 bg-white rounded"
      expand="md"
    >
      <FontAwesomeIcon role="button" className="text-custom-primary" icon={faBars} onClick={toggleSidebar} />
      <div>
        Halo, <span className="text-custom-primary fw-bold me-2">Gadjian User</span>
        <Avatar image="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" name="username"/>
      </div>
      
    </TopNav>
  );
};

export default Navbar;
