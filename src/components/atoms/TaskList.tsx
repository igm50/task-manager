import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

interface Props {
  tasks: Array<string>
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

  return (
    <List disablePadding={true}>
      {props.tasks.length ? (
        props.tasks.map((task, index) => (
          <ListItem key={'task' + index}>
            <ListItemText key={'task_text' + index}>
              ・{formattedTask(task)}
            </ListItemText>
          </ListItem>
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
