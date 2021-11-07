import React, { useEffect } from "react";
import { Navigation } from "../molecules/Navigation";
import upBTN from "../../images/scrolling-btn-up.png";

interface IMainTemplate {
  mainBlock: React.ReactNode;
}

export const MainTemplate = ({ mainBlock }: IMainTemplate) => {
  /* if (window.pageYOffset > 0) {
    (upBtn as HTMLElement).style.display = "block";
  } else {
    (upBtn as HTMLElement).style.display = "none";
  } */
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const upBtn = document.querySelector(".up-button");
      if (window.pageYOffset > 0) {
        (upBtn as HTMLElement).style.display = "block";
      } else {
        (upBtn as HTMLElement).style.display = "none";
      }
    });
  });
  function goUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="main-template">
      <Navigation />
      <div className="main-template-wrapper">
        <div>{mainBlock}</div>
      </div>
      <button className="up-button" ng-bind-html="vm.Name" onClick={goUp}>
        <img src={upBTN} alt="upBtn" />
      </button>
    </div>
  );
};

{
  /* &#11014; */
}
