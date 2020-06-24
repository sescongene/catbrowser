const initialState = {
  list: [],
  loading: true,
  full: false,
};

const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATS":
      return { ...state, list: action.data, loading: false, full: false };
    case "APPEND_CATS":
      const nonRepeatingCats = action.data.filter(
        (cat) => state.list.map((item) => item.id).indexOf(cat.id) < 0
      );
      return {
        ...state,
        list: [...state.list, ...nonRepeatingCats],
        loading: false,
        full: [...state.list, ...nonRepeatingCats].length === state.list.length,
      };
    case "CLEAR_CATS":
      return { list: action.data, loading: true, full: false };
    default:
      return state;
  }
};

export default catsReducer;
