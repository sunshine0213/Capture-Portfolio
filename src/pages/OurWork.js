import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const Work = styled.div`
  min-height: 100vh;
`;
const Movie = styled.div`
  padding-bottom: 10rem;
`;

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt='' />
        </Link>
      </Movie>
    </Work>
  );
};

export default OurWork;
