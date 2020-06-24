import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { getBreeds } from "../api/index.js";
import { useSelector, useDispatch } from "react-redux";
import fetchBreedsAction, { selectBreedAction } from "../actions/breed.js";

export default function BreedSelect(props) {
  const selectedBreed = useSelector((state) => state.selectedBreedReducer);
  const breeds = useSelector((state) => state.breedsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getBreeds().then((r) => {
      dispatch(fetchBreedsAction(r));
    });
    dispatch(selectBreedAction(props.selectedBreed));
  }, [dispatch,props.selectedBreed]);

  const returnBreed = (e) => {
    props.onSelectBreed(e.target.value);
  };

  return (
    <Form.Group controlId="breed">
      <Form.Label>Breed</Form.Label>
      <Form.Control
        as="select"
        disabled={breeds.loading}
        value={selectedBreed.name}
        onChange={(e) => returnBreed(e)}
      >
        <option value="">Select breed</option>
        {breeds.list.map((breed) => (
          <option key={breed.name} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}
