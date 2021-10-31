import React, { useEffect } from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSerialState } from "../../core/selectors/serialSelector";
import { SelectedLocation } from "../molecules/SelectedLocation";
import { getSelectedLocationAction } from "../../core/actions/serialAction";

export const SelectedLocationPage = memo(() => {
  const params = useParams() as any;
  const { selectedLocation } = useSelector(getSerialState) as any;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedLocationAction(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="container selected-location-wrapper">
            {selectedLocation && (
              <SelectedLocation
                key={selectedLocation.id}
                {...selectedLocation}
              />
            )}
          </div>
        }
      />
    </div>
  );
});
