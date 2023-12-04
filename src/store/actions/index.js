export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();

      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", error });
    }
  };
};
