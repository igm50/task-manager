import React from 'react'
import _ from 'lodash'
import { Dayjs } from 'dayjs'

import Container from '@material-ui/core/Container'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import Day from '../../components/molecules/Day'

interface Props {
  date: Dayjs
}

const Calendar: React.FC<Props> = props => {
  return (
    <Container component="div" fixed>
      <GridList cellHeight="auto" cols={7}>
        {_.range(7).map(index => (
          <GridListTile>
            <Day isEmpty={true}></Day>
          </GridListTile>
        ))}
        {_.range(7).map(index => (
          <GridListTile>
            <Day
              isEmpty={false}
              date={props.date}
              tasks={[]}
              onClickHandler={() => {}}
            ></Day>
          </GridListTile>
        ))}
        {_.range(7).map(index => (
          <GridListTile>
            <Day isEmpty={true}></Day>
          </GridListTile>
        ))}
      </GridList>
    </Container>
  )
}

export default Calendar
