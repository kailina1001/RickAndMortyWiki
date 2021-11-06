import * as React from "react";
import { memo } from "react";
import "./index.css";
import Rick_and_Morty_cover from "../../../images/Rick_and_Morty_cover.jpg";

export const AboutSeries = memo(() => (
  <div>
    <div className="about-series-wrapper">
      <p className="about-series">
        Rick and Morty is an American animated television series created by Dan
        Harmon and Justin Roiland that premiered on December 2, 2013 on Cartoon
        Network's Adult Swim programming block. In Canada, it premiered on
        January 10, 2016 on the Canadian version of Cartoon Network's Adult Swim
        programming block.
      </p>
      <div className="about-series-wrap">
        <ul className="about-series-list">
          <li>Genre: Comedy, Science Fiction, Adventure</li>
          <li>Number of seasons: 5</li>
          <li>Number of episodes: 51</li>
          <li>Duration of the series: 22 min.</li>
          <li>Authors: Dan Harmon, Justin Royland</li>
          <li>
            Directors: Jeff Myers, Brian Newton, John Rice, Justin Royland and
            others.
          </li>
          <li>Composer: Ryan Elder</li>
          <li>
            Production: Justin Roiland's Solo Vanity, Card Productions, Dan
            Harmon Productions, Starburns Industries, etc.
          </li>
          <li>
            Voice acting eng.: Justin Roiland, Chris Parnell, Spencer Grammer,
            Sarah Chock; russian voice: Dmitry Syenduk
          </li>
        </ul>
        <img src={Rick_and_Morty_cover} alt="promo" className="promo-pic" />
      </div>
    </div>
    <p className="about-series-more">
      If you want to learn about the characters, locations and episodes - use
      the navigation bar (at the top)
    </p>
  </div>
));
