import React from "react";
import { Button, Card } from "react-bootstrap";

export const CutstomList = ({ movieObj, func, btnDelete = false }) => {
  console.log(movieObj);
  return (
    <Card
      style={{ width: "100%" }}
      className="mt-5 text-warning d-flex flex-row"
    >
      <Card.Img
        variant="top"
        src={movieObj.Poster}
        style={{ width: "150px" }}
      />
      <Card.Body className="pt-5">
        <Card.Title className="fw-bolder fs-3">{movieObj.Title}</Card.Title>
        <Card.Title>Rating: {movieObj.imdbRating}</Card.Title>
        <p className="fs-5 ms-auto">
          <span className="fw-bold fs-5">Plot:</span> {movieObj.Plot}
        </p>

        {btnDelete ? (
          <div className="d-grid gap-6">
            <Button
              variant="outline-danger"
              size="lg"
              onClick={() => func(movieObj.imdbID)}
            >
              Delete
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-around">
            <Button variant="outline-danger" onClick={() => func("Happy")}>
              Happy List
            </Button>
            <Button variant="outline-primary" onClick={() => func("Lazy")}>
              Lazy List
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
