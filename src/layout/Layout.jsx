import React from "react";
import { Sidebar } from "../components/sidebar/Sidebar";
import { AppContainer } from "./layout.styled";

const Layout = (props) => {
  return (
    <AppContainer dimentions={props.dimentions}>
      <Sidebar
        favs={props.favs}
        dimentions={props.dimentions}
        sidebarStatus={props.sidebarStatus}
        setSidebarStatus={props.setSidebarStatus}
      />
      {props.children}
    </AppContainer>
  );
};

export default Layout;
