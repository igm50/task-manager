import React from 'react'
import _ from 'lodash'
import dayjs, { Dayjs } from 'dayjs'

import Container from '@material-ui/core/Container'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import Day from '../../components/molecules/Day'

interface Props {
  date: Dayjs
}

const Calendar: React.FC<Props> = props => {
  const clone = (date: Dayjs) => dayjs(date.format('YYYY-MM-dd'))
  const firstDate = clone(props.date).date(1)
  const before = firstDate.day()
  const daysInMonth = props.date.daysInMonth()
  const lastDay = clone(props.date).date(daysInMonth)
  const after = 6 - lastDay.day()

  return (
    <Container component="div" fixed>
      <GridList cellHeight="auto" cols={7}>
        {_.range(before).map(index => (
          <GridListTile key="before">
            <Day type="Empty"></Day>
          </GridListTile>
        ))}
        {_.range(daysInMonth).map(index => (
          <GridListTile key={index}>
            <Day
              type="Filled"
              date={clone(props.date).date(index + 1)}
              tasks={[]}
              onClickHandler={() => {}}
            ></Day>
          </GridListTile>
        ))}
        {_.range(after).map(index => (
          <GridListTile key="after">
            <Day type="Empty"></Day>
          </GridListTile>
        ))}
      </GridList>
    </Container>
  )
}

export default Calendar
