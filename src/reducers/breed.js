const initialBreeds = {
  list: [],
  loading: true,
};

const breedsReducer = (state = initialBreeds, action) => {
  switch (action.type) {
    case "FETCH_BREEDS":
      return { ...state, list: action.data, loading: false };
    default:
      return state;
  }
};

const initialBreed = {
  name: "",
};

export const selectedBreedReducer = (state = initialBreed, action) => {
  switch (action.type) {
    case "SELECT_BREED":
      return  { ...state, name: action.name };
    case "CLEAR_SELECTED_BREED":
      return { ...state, name: "" };
    default:
      return state;
  }
};
export default breedsReducer;
