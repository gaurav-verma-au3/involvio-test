import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { breakPointWidth } from "./utils/config";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import { ImMenu3 } from "react-icons/im";
import useDimensions from "react-use-dimensions";
import Footer from "./components/footer/Footer";
import { Route } from "react-router";
import Favourites from "./pages/favourites/Favourites";
function App() {
  const [app, d] = useDimensions();
  const [dimentions, setDimentions] = useState({ width: 0 });
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [last, setLast] = useState(false);
  const [first, setFirst] = useState(true);
  const [favs, setFavs] = useState([]);
  const [favIds, setFavIds] = useState([]);

  const handleLike = (s) => {
    if (favIds.includes(s.id)) {
      let temp = favs.filter((i) => i.id !== s.id);
      setFavs(temp);
    } else {
      setFavs([...favs, s]);
    }
  };

  useEffect(() => {
    const f = favs.map((i) => i.id);
    setFavIds(f);
  }, [favs]);

  useEffect(() => {
    let dim = d;
    delete dim.top;
    delete dim.left;
    delete dim.x;
    delete dim.y;
    delete dim.right;
    delete dim.bottom;
    setDimentions(dim);
  }, [d]);
  return (
    <div className="App" ref={app}>
      <Layout
        favs={favs}
        dimentions={dimentions}
        sidebarStatus={sidebarStatus}
        setSidebarStatus={setSidebarStatus}
      >
        <MainDiv dimentions={dimentions}>
          {dimentions.width < breakPointWidth ? (
            <ImMenu3
              onClick={(e) => setSidebarStatus(!sidebarStatus)}
              style={{ fontSize: "1.5rem", color: "#FC9F35" }}
            />
          ) : null}
          <OverFLowScrollBox>
            <Route exact path="/shows">
              <Home
                favIds={favIds}
                pageNum={pageNum}
                setPageNum={setPageNum}
                last={last}
                setLast={setLast}
                first={first}
                favs={favs}
                setFavs={setFavs}
                handleLike={handleLike}
                setFirst={setFirst}
              />
            </Route>
            <Route exact path="/favs">
              <Favourites handleLike={handleLike} favIds={favIds} favs={favs} />
            </Route>
          </OverFLowScrollBox>
          <Route exact path="/shows">
            <Footer
              pageNum={pageNum}
              setPageNum={setPageNum}
              last={last}
              setLast={setLast}
              first={first}
              setFirst={setFirst}
            />
          </Route>
        </MainDiv>
      </Layout>
    </div>
  );
}

export default App;

export const MainDiv = styled.div`
  grid-area: main;
  max-height: 100vh;

  ${(props) =>
    props.dimentions.width > breakPointWidth
      ? "padding: 2rem 2rem;"
      : "padding: 0px 2rem;"}
`;

export const OverFLowScrollBox = styled.div`
  height: 85vh;
  max-width: 100%;
  overflow-y: scroll;
  :focus {
    outline: none;
  }
`;
