const fetchBreedsAction = (data) => {
  return {
    type: "FETCH_BREEDS",
    data: data,
  };
};

export const selectBreedAction = (name) => {
  return {
    type: "SELECT_BREED",
    name: name,
  };
};

export default fetchBreedsAction;
