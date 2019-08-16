import React from 'react'
import dayjs from 'dayjs'

import EventCalendar from '../containers/templates/EventCalendar'

const Main: React.FC = () => {
  const now = dayjs()
  const dummy_tasksList = [
    {
      day: 10,
      tasks: [
        {
          id: 1,
          title: 'sample-task'
        }
      ]
    },
    {
      day: 12,
      tasks: [
        {
          id: 1,
          title: 'task1'
        },
        {
          id: 2,
          title: 'task2'
        }
      ]
    }
  ]
  return <EventCalendar now={now} tasksList={dummy_tasksList}></EventCalendar>
}

export default Main
