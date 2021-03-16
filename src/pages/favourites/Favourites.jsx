import React, { useState } from "react";
import ShowCard from "../../components/showCard/ShowCard";

const Favourites = ({ handleLike, favIds, favs }) => {
  const [hoveredShow, setHoveredShow] = useState(null);

  return (
    <div className="container-fluid">
      <div className="row">
        {favs && favs.length ? (
          favs.map((show) => (
            <div className="col-md-3 col-lg-2 col-xs-12 col-sm-6 my-3 rounded">
              <ShowCard
                favIds={favIds}
                handleLike={handleLike}
                setHoveredShow={setHoveredShow}
                hoveredShow={hoveredShow}
                show={show}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center mt-5">
            <h4>No Favourites added yet...</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
