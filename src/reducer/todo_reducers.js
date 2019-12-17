// const initialState = {
//   todoList: [
//     {
//       id: 0,
//       todoName: "first todo list",
//       description: "sample"
//     }
//   ]
// };

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};
