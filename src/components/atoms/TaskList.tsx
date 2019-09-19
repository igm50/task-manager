import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'

interface Props {
  tasks: Array<string>
  deleteTask?: (index: number) => void
  limit?: number
  short?: boolean
}

const TaskList: React.FC<Props> = props => {
  const limit = props.limit || 10
  const formattedTask = (task: string) => {
    return props.short && task.length > limit
      ? task.substr(0, limit - 2) + '……'
      : task
  }
  const deleteTask = props.deleteTask || (() => {})

  return (
    <List disablePadding={true}>
      {props.tasks.length ? (
        props.tasks.map((task, index) => (
          <ul key={'task' + index}>
            <li key={'task_text' + index}>
              <span>{formattedTask(task)}</span>
              <Button
                size="small"
                color="primary"
                onClick={() => deleteTask(index)}
              >
                削除
              </Button>
            </li>
          </ul>
        ))
      ) : (
        <ListItem>
          <ListItemText>タスクがありません。</ListItemText>
        </ListItem>
      )}
    </List>
  )
}

export default TaskList
