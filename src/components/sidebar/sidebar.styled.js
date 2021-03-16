import styled, { css } from "styled-components";
import { breakPointWidth } from "../../utils/config";

export const SideBarContainer = styled.div`
  ${(props) =>
    props.dimentions.width > breakPointWidth
      ? css`
          grid-area: leftsidebar;
          border-right: 1px solid #d1d1d1;
          height: 100vh;
          z-index: 50;
          width: 15vw;
          padding: 2rem 2rem;
        `
      : css`
          transition: all 0.2s ease;
          background-color: white;
          z-index: 50;
          height: 100vh;
          width: 100vw;
          ${props.sidebarStatus
            ? "transform : translate(0px ,0px);"
            : "transform : translate(-100%, 0px);"}
          padding: 2rem 2rem;
          position: fixed;
        `}
`;

export const Anchor = styled.p`
  color: #282828;
  font-size: 1.5rem;
  font-weight: bold;
  :hover {
    color : #ff0000;
  }
`;
