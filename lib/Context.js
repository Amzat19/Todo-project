import React, { useContext, useState } from "react";

const ActionsContext = React.createContext()
const ShowAllTodoContext = React.createContext();
const ShowCompletedTodoContext = React.createContext();
const ShowActiveTodoContext = React.createContext();

export const useActiveButtonContext = () => {
    return useContext(ActionsContext)
};

export const useAllContext = () => {
    return useContext(ShowAllTodoContext)
};

export const useCompletedContext = () => {
    return useContext(ShowCompletedTodoContext)
};

export const useActiveContext = () => {
    return useContext(ShowActiveTodoContext)
};


const ActionsProvider = ({ children }) => {
    const [activeButton, setActiveButton] = useState({
        all: true,
        active: false,
        completed: false
    });

    const showAllTodo = () => {
        setActiveButton({ all: true, active: false, completed: false});
    }

    const showCompletedTodo = () => {
        setActiveButton({ all: false, active: false, completed: true});
    }

    const showActiveTodo = () => {
        setActiveButton({ all: false, active: true, completed: false});
    }

    return (
        <ActionsContext.Provider value={activeButton}>
            <ShowAllTodoContext.Provider value={showAllTodo}>
                <ShowCompletedTodoContext.Provider value={showCompletedTodo}>
                    <ShowActiveTodoContext.Provider value={showActiveTodo}>
                        {children}
                    </ShowActiveTodoContext.Provider>
                </ShowCompletedTodoContext.Provider>
            </ShowAllTodoContext.Provider>
        </ActionsContext.Provider>
    )
}

export default ActionsProvider;