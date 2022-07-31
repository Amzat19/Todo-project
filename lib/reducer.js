import { ACTIONS } from "./action";

const handleDrag = (result, todos) => {
  if(!result.destination) return;
  const newTodoList = Array.from(todos);
  const [reorderTodos] = newTodoList.splice(result.source.index, 1);
  newTodoList.splice(result.destination.index, 0, reorderTodos);

  return newTodoList;
}

const reducer = (todos, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO: 
        return [...todos, { id: Date.now(), title: action.payload.title, completed: false }];
      case ACTIONS.DELETE_TODO: 
        return todos.filter((todo) =>  todo.id !== action.payload.id);
      case ACTIONS.EDIT_TODO:
        return todos.map((todo) => {
          if(todo.id === action.payload.id){
            return { ...todo, title: action.payload.title}
          }
          return todo
       });
      case ACTIONS.CHECK_TODO:
        return todos.map((todo) => {
          if(todo.id === action.payload.id){
            return { ...todo, completed: !todo.completed}
          }
          return todo
        });
      case ACTIONS.CLEAR_COMPLETED_TODO: 
        return todos.filter((todo) => todo.completed === false);
        case ACTIONS.HANDLE_DRAG:
          return handleDrag(action.payload.result, todos)
      default:
        return todos;
  }
}

export default reducer;