const initState = {
  projects: [
    { id: 1, title: "help me find peach", content: "blah blah blah blah" },
    { id: 2, title: "Collect all the stars", content: "blah blah blah blah" },
    { id: 3, title: "Ride with yoshi", content: "blah blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
