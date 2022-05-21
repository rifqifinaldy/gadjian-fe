import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes as Switch, Route } from "react-router-dom";
import Personel from "./pages/Personel/Personel";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Attendance from "./pages/Attendance/Attendance";

const AppRoute = ({ sidebarIsOpen, toggleSidebar }) => {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      <Navbar toggleSidebar={toggleSidebar} />
      {/* Logic Pindah Page */}
      <Switch>
        <Route exact path="/" element={<Personel />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/attendance" element={<Attendance />} />
      </Switch>
    </Container>
  );
};

export default AppRoute;
