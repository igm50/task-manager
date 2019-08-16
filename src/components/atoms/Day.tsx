import React from 'react'
import _ from 'lodash'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

interface Props {
  classes: Record<'bodyCard', string>
  month: number
  day: number
  tasks: Array<{
    id: number
    title: string
  }>
  handleTaskClick: (taskId: number) => void
}

const Day: React.FC<Props> = props => {
  return (
    <Card className={props.classes.bodyCard}>
      <CardContent>
        <Typography>{props.month + '月' + props.day + '日'}</Typography>
        <List disablePadding={true}>
          {_.map(props.tasks, task => (
            <ListItem>
              <ListItemText onClick={() => props.handleTaskClick(task.id)}>
                {task.title}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default Day
