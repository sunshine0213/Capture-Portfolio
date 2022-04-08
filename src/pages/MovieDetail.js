import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

const Details = styled.div`
  color: #fff;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div``;

// Award Component
const Award = () => {
  return (
    <div>
      <h3>Title</h3>
      <div className="line"></div>
      <p>description</p>
    </div>
  );
};

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  console.log(url);
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <Details>
      {movie ? (
        <div>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award />
            ))}
          </Awards>
        </div>
      ) : (
        <h3>Sorry the movie you are looking is not available</h3>
      )}
    </Details>
  );
};

export default MovieDetail;
