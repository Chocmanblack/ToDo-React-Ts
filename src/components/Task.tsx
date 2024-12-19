type Tarea = {
  task: string;
  deleteTask: () => void;
}

export const Task = ({task, deleteTask }: Tarea) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={deleteTask}>Borrar Tarea</button>
    </div>
  )
}