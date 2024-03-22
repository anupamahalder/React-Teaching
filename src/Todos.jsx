import Todo from "./Todo";
import PropTypes from 'prop-types';

export default function Todos({todos}){
    console.log(todos);
    return (
        <div>
            <h1>Todo list</h1>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
            }
        </div>
    )
}

Todos.propTypes={
    todos: PropTypes.array.isRequired
}