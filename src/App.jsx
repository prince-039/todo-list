import AddTodo from "./Componenets/AddTodo/AddTodo";
import TodoList from "./Componenets/TodoList/TodoList";
import { useReducer } from "react";
import TodoContext from "./Context/TodoContext";
import todoReducer from "./reducers/todoReducer";
import TodoDispatchContext from "./Context/TodoDispatchContext";


function App() {

const [list, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{list}}>
    <TodoDispatchContext.Provider value={{dispatch}}>
      <AddTodo />
      <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App
