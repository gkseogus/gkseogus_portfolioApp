import React from "react";
import { useState } from "react";
import { VscChevronUp } from "react-icons/vsc";
import styled from "styled-components";

const ScrollToTop = styled.div`
  position: fixed;
  width: 70%;
  left: 83%;
  bottom: 70px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  background-color: none;
  color: red;
`;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  /** Condition event function that results in scroll buttons  */
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  /** Scroll Options */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <aside>
      <ScrollToTop>
        <VscChevronUp
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        ></VscChevronUp>
      </ScrollToTop>
    </aside>
  );
};

export default React.memo(ScrollToTopButton);
