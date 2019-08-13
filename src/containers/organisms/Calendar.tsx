import React from 'react'
import dayjs from 'dayjs'

import Container from '@material-ui/core/Container'

import CalendarHeader from '../../components/molecules/CalendarHeader'
import CalendarBody from '../../components/molecules/CalendarBody'

interface Props {
  classes: Record<'headerTile' | 'headerCard' | 'bodyCard', string>
  now: dayjs.Dayjs
  handleDayClick: () => void
  handleTaskClick: () => void
}

const Calendar: React.FC<Props> = props => {
  return (
    <Container component="div" fixed>
      <CalendarHeader classes={props.classes}></CalendarHeader>
      <CalendarBody
        classes={props.classes}
        now={props.now}
        handleDayClick={props.handleDayClick}
        handleTaskClick={props.handleTaskClick}
      ></CalendarBody>
    </Container>
  )
}

export default Calendar
