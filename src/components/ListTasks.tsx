import {Task} from './Task'

type ListTasks = {
  listTasks: string[]
  deleteTask: (index:number) => void
}

export const ListTasks = ({listTasks, deleteTask }: ListTasks) => {
  return (
    <div className="taskList">
      {listTasks.map((task, index)=> (
        <Task key={index} task={task} deleteTask={() => deleteTask(index)}></Task>
      )
      )}
    </div>
  )
}