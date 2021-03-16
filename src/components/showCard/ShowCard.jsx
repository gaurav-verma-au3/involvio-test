import React from "react";
import {
  ShowCardContainer,
  ShowCardCover,
  ShowInfoContainer,
  ShowTitle,
  ShowFavLiked,
} from "./showCard.styled";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
const ShowCard = ({
  show,
  setHoveredShow,
  hoveredShow,
  handleLike,
  favIds,
}) => {
  const thisHovered = () => hoveredShow === show.id;
  return (
    <ShowCardContainer
      onMouseEnter={(e) => setHoveredShow(show.id)}
      onMouseLeave={(e) => setHoveredShow(null)}
    >
      <ShowCardCover src={show?.image?.medium} />
      <ShowInfoContainer show={thisHovered()}></ShowInfoContainer>
      <ShowTitle show={thisHovered()}>{show.name}</ShowTitle>
      <ShowFavLiked show={thisHovered()}>
        {favIds.includes(show.id) ? (
          <FaHeart
            className="cursor-pointer"
            onClick={(e) => handleLike(show)}
          />
        ) : (
          <FiHeart
            className="cursor-pointer"
            onClick={(e) => handleLike(show)}
          />
        )}
      </ShowFavLiked>
    </ShowCardContainer>
  );
};

export default ShowCard;
