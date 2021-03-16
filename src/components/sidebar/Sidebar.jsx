import React from "react";
import { Link } from "react-router-dom";
import { breakPointWidth } from "../../utils/config";
import { Anchor, SideBarContainer } from "./sidebar.styled";
import { GrFormClose } from "react-icons/gr";

export const Sidebar = ({ sidebarStatus, dimentions, setSidebarStatus, favs }) => {
  return (
    <SideBarContainer sidebarStatus={sidebarStatus} dimentions={dimentions}>
      <div style={{ textAlign: "right" }}>
        {dimentions.width > breakPointWidth ? null : (
          <GrFormClose
            style={{ fontSize: "2rem" }}
            onClick={(e) => setSidebarStatus(!sidebarStatus)}
          />
        )}
      </div>
      <Link
        style={{ textDecoration: "none" }}
        to="/shows"
        onClick={(e) => setSidebarStatus(false)}
      >
        <Anchor>Shows</Anchor>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to="/favs"
        onClick={(e) => setSidebarStatus(false)}
      >
        <Anchor>Favourites ({favs.length})</Anchor>
      </Link>
    </SideBarContainer>
  );
};
