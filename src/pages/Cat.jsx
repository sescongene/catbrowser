import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { getCat } from "../api/index.js";

export default function CatPage({ match }) {
  const [cat, setCat] = useState({});
  const [loading, setLoading] = useState(false);
  const catId = match.params.id;

  useEffect(() => {
    getCat(catId).then((result) => {
      setCat(result);
      setLoading(true);
    });
  }, [catId]);

  return loading ? (
    <div className="container">
      <Card>
        <Card.Header>
          <Link
            className="btn btn-primary"
            to={`/?breed=${cat.breeds.length === 1 ? cat.breeds[0].id : ""}`}
          >
            Back
          </Link>
        </Card.Header>
        <Card.Img src={cat.url} />
        {cat.breeds.map((breed) => (
          <Card.Body key={breed.id}>
            <h4>{breed.name}</h4>
            <h5>Origin: {breed.origin}</h5>
            <h6>{breed.temperament}</h6>
            <p>{breed.description}</p>
          </Card.Body>
        ))}
      </Card>
    </div>
  ) : null;
}
