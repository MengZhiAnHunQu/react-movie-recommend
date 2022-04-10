import React from "react";
import { Button, Card } from "react-bootstrap";

export const CutstomCard = ({ movieObj, func, btnDelete = false }) => {
  console.log(movieObj);
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "14rem" }} className="mt-5 text-warning ">
        <Card.Img variant="top" src={movieObj.Poster} />
        <Card.Body>
          <Card.Title className="fw-bolder">{movieObj.Title}</Card.Title>
          <Card.Title>Rating: {movieObj.imdbRating}</Card.Title>

          {btnDelete ? (
            <div className="d-grid gap-2">
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
    </div>
  );
};
