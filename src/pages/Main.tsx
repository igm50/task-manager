import React from 'react'
import dayjs from 'dayjs'

import EventCalendar from '../containers/templates/EventCalendar'

const Main: React.FC = () => {
  const now = dayjs()

  return <EventCalendar now={now}></EventCalendar>
}

export default Main
