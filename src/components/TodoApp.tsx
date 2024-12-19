import { useState } from "react"
import { ListTasks } from "./ListTasks"
export const TodoApp = () => {

  const [newTask, setNewTask] = useState<string>('')
  const [listTasks, setListTasks] = useState<string[]>([])

  const handleAddTask = () => {
    if(newTask.trim() === '') return
    setListTasks(PreviousTasks => [...PreviousTasks, newTask] )
    setNewTask('')
  }

  const handleDeleteTask = (index:number)=> {
    setListTasks(CurrentTasks => CurrentTasks.filter((_,i) => i !== index ) )
  }

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div className="flex">
        <input type="text" 
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <ListTasks listTasks={listTasks} deleteTask={handleDeleteTask} />

    </div>
  )
}