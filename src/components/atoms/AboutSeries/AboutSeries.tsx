import * as React from "react";
import { memo } from "react";
import "./index.css";

export const AboutSeries = memo(() => (
  <div>
    <p className="about-series">
      Rick and Morty is an American adult animated science fiction sitcom
      created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime
      programming block, Adult Swim. The series follows the misadventures of
      cynical mad scientist Rick Sanchez and his good-hearted, but fretful
      grandson Morty Smith, who split their time between domestic life and
      interdimensional adventures. Roiland voices the eponymous characters, with
      Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of Rick
      and Morty's family. The series originated from an animated short parody
      film of Back to the Future, created by Roiland for Channel 101, a short
      film festival co-founded by Harmon. The series has been acclaimed by
      critics for its originality, creativity and humor. The current fifth
      season premiered on June 20, 2021, and consists of ten episodes. A sixth
      season was confirmed as part of a long-term deal in May 2018 that ordered
      70 new episodes over an unspecified number of seasons.
    </p>
    <p className="about-series-more">
      If you want to learn about the characters, locations and episodes - use
      the navigation bar (at the top)
    </p>
  </div>
));
