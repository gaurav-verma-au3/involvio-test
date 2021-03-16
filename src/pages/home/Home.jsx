import React, { useEffect, useState } from "react";
import ShowCard from "../../components/showCard/ShowCard";
import { getShowsAPI } from "../../utils/requests";

const Home = ({ pageNum, setLast, setFirst, handleLike, favIds }) => {
  const [shows, setShows] = useState(null);
  const [hoveredShow, setHoveredShow] = useState(null);

  const getShows = async (n) => {
    const shows = await getShowsAPI(n);
    console.log(shows, "shows");
    if (!shows.length) {
      setLast(true);
    }
    setShows(shows);
  };

  useEffect(() => {
    setShows(null);
    getShows(pageNum);
    if (pageNum === 1) {
      setFirst(true);
    } else {
      setFirst(false);
      console.log("ran");
    }
  }, [pageNum]);

  return (
    <div className="container-fluid">
      <div className="row">
        {shows && shows.length ? (
          shows.map((show) => (
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
            <div class="spinner-border text-danger" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
