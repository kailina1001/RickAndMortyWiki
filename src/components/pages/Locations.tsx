import React from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { Title } from "../atoms/Title";
import LocationsLogo from "../../images/LocationsLogo.png";
import { LocationsFilter } from "../atoms/LocationsFilter";
import { LocationsCards } from "../atoms/LocationsCards";
import { PagesBtn } from "../atoms/PagesBtn";
import {
  getLocationParamsAction,
  setCurrentLocationPageAction,
  setLocationParamsAction,
} from "../../core/actions";
import { useDispatch, useSelector } from "react-redux";
import { getSerialState } from "../../core/selectors/serialSelector";

export const Locations = memo(() => {
  const dispatch = useDispatch();

  // переключение страниц (по кнопкам)

  const { currentLocationPage } = useSelector(getSerialState);

  const nextLocationPage = () => {
    dispatch(setCurrentLocationPageAction(currentLocationPage + 1));
  };
  const prevLocationPage = () => {
    dispatch(setCurrentLocationPageAction(currentLocationPage - 1));
  };

  function checkPage(currPage: any, direction: string) {
    const prevbtn = document.querySelector(".previous-btn");
    const nextbtn = document.querySelector(".next-btn");
    if (currPage - 1 == 1) {
      direction == "prev"
        ? ((prevbtn as HTMLElement).style.display = "none")
        : ((prevbtn as HTMLElement).style.display = "block");
    } else if (currPage + 1 == 6) {
      direction == "next"
        ? ((nextbtn as HTMLElement).style.display = "none")
        : ((nextbtn as HTMLElement).style.display = "block");
    } else {
      (prevbtn as HTMLElement).style.display = "block";
      (nextbtn as HTMLElement).style.display = "block";
    }
  }

  // поиск по названию локации

  const { locationParams } = useSelector(getSerialState);

  const onChangeInputValue = (text: string) => {
    dispatch(
      setLocationParamsAction({
        ...locationParams,
        name: text,
      })
    );
  };

  const onChangeHandlerType = (text: string) => {
    dispatch(
      setLocationParamsAction({
        ...locationParams,
        type: text,
      })
    );
  };

  const onChangeHandlerDimension = (text: string) => {
    dispatch(
      setLocationParamsAction({
        ...locationParams,
        dimension: text,
      })
    );
  };

  const onClickLocationParams = () => {
    dispatch(getLocationParamsAction(locationParams));
  };

  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="locations-page-wrapper">
            <div className="container locations-page">
              <div className="locations-logo">
                <img src={LocationsLogo} className="locations-page-logo" />
              </div>
              <Title title={"Locations"} />
              <LocationsFilter
                onChangeInputValue={onChangeInputValue}
                onChangeHandlerType={onChangeHandlerType}
                onChangeHandlerDimension={onChangeHandlerDimension}
                onClick={onClickLocationParams}
              />
              <LocationsCards currentLocationPage={currentLocationPage} />
              <div className="pages-btn">
                <PagesBtn
                  title={"Previous"}
                  onClickPage={() => {
                    checkPage(currentLocationPage, "prev");
                    prevLocationPage();
                  }}
                  btnClassName={"previous-btn"}
                />
                <PagesBtn
                  title={"Next"}
                  onClickPage={() => {
                    checkPage(currentLocationPage, "next");
                    nextLocationPage();
                  }}
                  btnClassName={"next-btn"}
                />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
});
