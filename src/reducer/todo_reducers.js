export default (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newObj = {
        id: new Date().valueOf(),
        description: action.payload.description,
        isEdit: false
      };
      return [...state, newObj];
    case "REMOVE_TODO":
      const id = action.payload;
      console.log(state.findIndex(item => item.id === id));
      // let todoList = [];
      // if (index > 0) {
      //   todoList = [...state.slice(0, index), ...state.slice(index + 1)];
      // } else {
      //   if (state.length > 1) {
      //     todoList = [...state.slice(1, state.length)];
      //   }
      // }
      return [...state];
    default:
      return state;
  }
};
