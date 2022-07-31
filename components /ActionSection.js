import ActionSectionStyles from "../styles/ActionSectionStyles";
import { useActiveButtonContext, useAllContext, useCompletedContext, useActiveContext } from "../lib/Context";

const ActionsSection = () => {
    const activeButton = useActiveButtonContext();
    const showAllTodo = useAllContext();
    const showCompletedTodo = useCompletedContext();
    const showActiveTodo = useActiveContext();

    return (
        <ActionSectionStyles>
            <div>
                <button type="button" onClick={showAllTodo} className={activeButton.all === true ? "all-active": ""}>All</button>
                <button type="button" onClick={showActiveTodo} className={activeButton.active === true ? "active-active": ""}>Active</button>
                <button type="button" onClick={showCompletedTodo} className={activeButton.completed === true ? "completed-active": ""}>Completed</button>
            </div>
            <p>Drag and drop to reorder list</p>
        </ActionSectionStyles>
    )
}

export default ActionsSection;