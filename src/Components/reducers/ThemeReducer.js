export const initialState = {
    theme : "light", //init
    apiData: null,  //init
};

export const reducer = (state, action) =>{
    switch (action.type) {
      case "TOGGLE_THEME":
        return { ...state, theme: state.theme === "light" ? "dark" : "light" };
      case "SET_API_DATA":
        return { ...state, apiData: action.payload };
      default:
        return state;
    }
}