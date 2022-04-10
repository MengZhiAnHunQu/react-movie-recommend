import React, { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CutstomList } from "../customCard/CustomList";
import { CutstomCard } from "../customCard/CutstomCard";

export const MovieList = ({ movieList, deleteMovie }) => {
  const [mood, setMood] = useState("");
  const [isGrid, setIsGrid] = useState(true);

  //filter first then display
  const filterMovies = mood
    ? movieList.filter((movie) => movie.cat === mood)
    : movieList;

  return (
    <div className="py-3">
      <Row>
        <Col className="d-flex me-auto text-white">
          {mood || "All"} List is selected
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup>
            <Button variant="outline-secondary" onClick={() => setMood("")}>
              All
            </Button>
            <Button variant="outline-danger" onClick={() => setMood("Happy")}>
              Happy
            </Button>
            <Button variant="outline-primary" onClick={() => setMood("Lazy")}>
              Lazy
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline-light" onClick={() => setIsGrid(true)}>
              Grid
            </Button>
            <Button variant="outline-light" onClick={() => setIsGrid(false)}>
              List
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      {/* //7. create a component that will list the movies, we use the custom card
      to shwo the movie in the movie list */}

      <Row>
        <Col className="d-flex flex-wrap justify-content-around">
          {filterMovies.map((movie, i) =>
            isGrid ? (
              <CutstomCard
                key={i}
                movieObj={movie}
                btnDelete={true}
                func={deleteMovie}
              />
            ) : (
              <CutstomList
                key={i}
                movieObj={movie}
                btnDelete={true}
                func={deleteMovie}
              />
            )
          )}
        </Col>
      </Row>
    </div>
  );
};
