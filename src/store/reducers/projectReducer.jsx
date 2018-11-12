const initState = {
  projects: [
    { id: 1, title: "help me find peach", content: "blah blah blah blah" },
    { id: 2, title: "Collect all the stars", content: "blah blah blah blah" },
    { id: 3, title: "Ride with yoshi", content: "blah blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("CREATED PROJECT");
      console.log(action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("CREATE_PROJECT_ERROR", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
