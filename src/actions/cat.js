export const fetchCatsAction = (data) => {
  return {
    type: "FETCH_CATS",
    data: data,
  };
};

export const appendCatsAction = (data) => {
  return {
    type: "APPEND_CATS",
    data: data,
  };
};

export const clearCatsAction = () => {
  return {
    type: "CLEAR_CATS",
    data:[],
  };
};

export default fetchCatsAction;
