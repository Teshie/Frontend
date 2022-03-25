const processIDsuper = (state = 2, action) => {
  switch (action.type) {
    case "PID":
      return action.payload;
    default:
      return state;
  }
};
export { processIDsuper };
