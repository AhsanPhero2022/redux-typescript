const Logger = (state) => (next) => (action) => {
  console.log("Currnt Sate", state.getState());
  console.log("Action", action);
  next(action);
};

export default Logger;
