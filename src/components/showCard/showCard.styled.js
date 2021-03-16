import styled from "styled-components";

export const ShowCardContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.5s ease;
`;

export const ShowCardCover = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const ShowInfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.show ? "" : "none")};
  z-index: 20;
  transition: all 0.5s ease;
`;

export const ShowTitle = styled.p`
  position: absolute;
  top: 10%;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  color: #ffffff;
  z-index: 21;
  display: ${(props) => (props.show ? "" : "none")};
  transition: all 0.5s ease;
`;

export const ShowFavLiked = styled.p`
  position: absolute;
  top: 60%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: #ff0000;
  display: ${(props) => (props.show ? "" : "none")};
  z-index: 21;
  transition: all 0.5s ease;
`;
