
const Todo = ({todo}) => {
    console.log(todo);
    const {task, isDone} = todo;
    return (
        <div>
            {/* <p>Task: {task} Completed: {isDone ? "Yes": "NO"}</p> */}
            <p>Task: {task} 
            {
                isDone ? " (Completed)": " (Working On)"
            }
            </p>
        </div>
    );
};

export default Todo;