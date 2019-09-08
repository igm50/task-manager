import React, { useContext } from 'react'
import _ from 'lodash'
import dayjs, { Dayjs } from 'dayjs'

import Container from '@material-ui/core/Container'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import Day from '../../components/molecules/Day'

interface DayTasks {
  day: number
  tasks: Array<string>
}

interface Props {
  date: Dayjs
  dayTaskList: Array<DayTasks>
}

const defaultContext: Props = {
  date: dayjs(),
  dayTaskList: []
}
export const CalendarContext = React.createContext<Props>(defaultContext)

const findTasks = (
  dayTaskList: Array<DayTasks>,
  day: number
): Array<string> => {
  const dayTasks = _.find(dayTaskList, { day: day })
  return dayTasks ? dayTasks.tasks : []
}

const Calendar: React.FC = () => {
  const context = useContext(CalendarContext)

  const before = context.date.date(1).day()
  const daysInMonth = context.date.daysInMonth()
  const after = 6 - context.date.date(daysInMonth).day()

  return (
    <Container component="div" fixed>
      <GridList cellHeight="auto" cols={7}>
        {_.range(before).map(index => (
          <GridListTile key={'before' + index}>
            <Day type="Empty"></Day>
          </GridListTile>
        ))}
        {_.range(daysInMonth).map(index => (
          <GridListTile key={index}>
            <Day
              type="Filled"
              date={context.date.date(index + 1)}
              tasks={findTasks(context.dayTaskList, index + 1)}
              onClickHandler={() => {}}
            ></Day>
          </GridListTile>
        ))}
        {_.range(after).map(index => (
          <GridListTile key={'after' + index}>
            <Day type="Empty"></Day>
          </GridListTile>
        ))}
      </GridList>
    </Container>
  )
}

export default Calendar
