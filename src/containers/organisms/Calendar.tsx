import React from 'react'
import dayjs from 'dayjs'

import Container from '@material-ui/core/Container'

import CalendarHeader from '../../components/molecules/CalendarHeader'
import CalendarBody from '../../components/molecules/CalendarBody'

interface Props {
  classes: Record<'headerTile' | 'headerCard' | 'bodyCard', string>
  now: dayjs.Dayjs
  tasksList: Array<{
    day: number
    tasks: Array<{
      id: number
      title: string
    }>
  }>
  handleDayClick: (day: number) => void
  handleTaskClick: (day: number, taskId: number) => void
}

const Calendar: React.FC<Props> = props => {
  return (
    <Container component="div" fixed>
      <CalendarHeader classes={props.classes}></CalendarHeader>
      <CalendarBody
        classes={props.classes}
        now={props.now}
        tasksList={props.tasksList}
        handleDayClick={props.handleDayClick}
        handleTaskClick={props.handleTaskClick}
      ></CalendarBody>
    </Container>
  )
}

export default Calendar
