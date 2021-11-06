import * as React from "react";
import { memo } from "react";
import { PageLoader } from "../PageLoader";
import "./index.css";

interface ISelectedCharacterImg {
  image: string;
}

export const SelectedCharacterImg = memo(({ image }: ISelectedCharacterImg) => {
  /*  if (!image) {
    return <PageLoader />;
  } else */
  return (
    <div>
      <img
        src={image}
        className="selected-character-img"
        alt="Character is loading..."
      />
    </div>
  );
});
