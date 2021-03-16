import React from "react";
import { FooterContainer } from "./footer.styled";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
const Footer = ({ pageNum, setPageNum, last, setLast, first, setFirst }) => {
  return (
    <FooterContainer>
      <button
        onClick={(e) => setPageNum(pageNum - 1)}
        style={{
          padding: "5px 15px",
          backgroundColor: "transparent",
          border: "none",
        }}
        disabled={first}
      >
        <FaAngleDoubleLeft />
      </button>
      <input
        style={{ margin: "0px 30px", width: "60px", textAlign: "center" }}
        type="number"
        onChange={(e) => setPageNum(parseInt(e.target.value))}
        value={pageNum}
      ></input>
      <button
        onClick={(e) => setPageNum(pageNum + 1)}
        disabled={last}
        style={{
          padding: "5px 15px",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <FaAngleDoubleRight />
      </button>
    </FooterContainer>
  );
};

export default Footer;
