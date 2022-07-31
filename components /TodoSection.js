import TodoSectionStyles from "../styles/TodoSectionStyles"
import Todos from "../components /Todos"
import { ACTIONS } from "../lib/action";
import { useActiveButtonContext, useAllContext, useActiveContext, useCompletedContext } from "../lib/Context";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TodoSection = ({ todoList, dispatch }) => {
  const activeButton = useActiveButtonContext();
  const showAllTodo = useAllContext();
  const showCompletedTodo = useCompletedContext();
  const showActiveTodo = useActiveContext();
  
  const actions = () => {
    if(activeButton.all){
      return todoList
    } else if(activeButton.completed){
      return todoList.filter((todo) => todo.completed === true)
    } else {
      return todoList.filter((todo) => todo.completed === false)
    }
  }

  const todosLeft = actions().filter((todo) => todo.completed === false).length;

  const handleOnDrag = (result) => {
    dispatch({ type: ACTIONS.HANDLE_DRAG, payload: { result: result}})
  }

    return (
        <TodoSectionStyles>
          <DragDropContext onDragEnd={handleOnDrag}>
            <article>
              <Droppable droppableId="todos">
                { (provided) => (
                  <div className="todos" {...provided.droppableProps} ref={provided.innerRef}>
                    {
                      todoList && actions().map((todo, index) => {
                        return (
                          <Draggable key={index} draggableId={""+index} index={index}>
                            {(provided) => {
                              return (
                                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                <Todos todo={todo} dispatch={dispatch} index={index}/>
                                </div>
                              )
                            }}
                          </Draggable>
  
                        )
                      }) 
                    }
                    {provided.placeholder}
                  </div>      
                )}
              </Droppable>
              <div className="todo-info">
                <span>{todosLeft} items left</span>
                <div>
                  <button type="button" onClick={showAllTodo} className={activeButton.all === true ? "all-active": ""}>All</button>
                  <button type="button" onClick={showActiveTodo} className={activeButton.active === true ? "active-active": ""}>Active</button>
                  <button type="button" onClick={showCompletedTodo} className={activeButton.completed === true ? "completed-active": ""}>Completed</button>
                </div>
                <button onClick={() => dispatch({ type: ACTIONS.CLEAR_COMPLETED_TODO})}>Clear Completed</button>
              </div>
            </article>
            
            <p>Drag and drop to reorder list</p>
          </DragDropContext>
        </TodoSectionStyles>
    )
}

export default TodoSection;