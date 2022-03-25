const processReducer = (state = 2, action) => {
  switch (action.type) {
    case "ID":
      return action.payload;
    default:
      return state;
  }
};
export { processReducer };
