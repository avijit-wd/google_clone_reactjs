export const initialState = {
  term: null,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return {
        ...state,
        data: action.data,
      };
    }
    case "SET_SEARCH_TERM": {
      return {
        ...state,
        term: action.term,
      };
    }
    default:
      return state;
  }
};

export default reducer;
