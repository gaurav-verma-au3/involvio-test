import styled, { css } from "styled-components";
import { breakPointWidth } from "../utils/config";

export const AppContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  height: 100vh;
  width: 100vw;
  padding-top: ${(props) =>
    props.dimentions.width > breakPointWidth ? "0px" : "30px"};
  ${(props) =>
    props.dimentions.width > breakPointWidth
      ? css`
          grid-template-columns: 15% 85%;
          grid-template-areas: "leftsidebar main";
        `
      : css`
          grid-template-columns: 100%;
          grid-template-areas: "main";
        `};
`;
