import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getCats } from "../api/index.js";
import BreedSelect from "../components/breedSelect.jsx";
import CatCard from "../components/catCard.jsx";
import { selectBreedAction } from "../actions/breed.js";
import {
  fetchCatsAction,
  appendCatsAction,
  clearCatsAction,
} from "../actions/cat";

export default function BreedPage() {
  const [buttonText, setButtonText] = useState("Load More");
  const [page, setPage] = useState(1);
  const [loadingCats, setLoadingCats] = useState(true);
  const cats = useSelector((state) => state.catsReducer);
  const selectedBreed = useSelector((state) => state.selectedBreedReducer);
  const query = new URLSearchParams(useLocation().search);
  const breedParams = query.get("breed");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectBreedAction(breedParams));
    handleBreed(breedParams);
    // eslint-disable-next-line
  }, []);

  const loadMore = () => {
    handleBreed(selectedBreed.name);
  };

  const handleBreed = (breed) => {
    dispatch(selectBreedAction(breed));
    if (!breed) {
      dispatch(clearCatsAction());
      setPage(1);
      setButtonText("Load More");
    } else if (breed !== selectedBreed.name) {
      dispatch(clearCatsAction());
      setPage(1);

      fetchCats(breed, 1);
    } else {
      fetchCats(selectedBreed.name, page);
    }
  };

  const fetchCats = (breed, p, append = false) => {
    setLoadingCats(true);
    setButtonText("Loading Cats..");
    getCats(p, breed).then((res) => {
      append ? dispatch(fetchCatsAction(res)) : dispatch(appendCatsAction(res));
      setPage(page + 1);
      setButtonText("Load More");
      setLoadingCats(false);
    });
  };

  return (
    <div className="container">
      <h1>Cat Browser</h1>
      <Row style={{ padding: "10px 0" }}>
        <Col md={3} sm={6} xs={12}>
          <BreedSelect
            selectedBreed={selectedBreed.name}
            onSelectBreed={handleBreed}
          />
        </Col>
      </Row>

      <Row>
        {cats.list.length !== 0 ? (
          cats.list.map((cat) => <CatCard cat={cat} key={cat.id}></CatCard>)
        ) : (
          <Col style={{ marginBottom: "20px" }} xs={12}>
            No cats available
          </Col>
        )}
      </Row>
      <Row>
        <Col md={3} sm={6} xs={12}>
          {!cats.full ? (
            <Button
              disabled={loadingCats}
              variant="success"
              type="button"
              onClick={loadMore}
            >
              {buttonText}
            </Button>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
}
