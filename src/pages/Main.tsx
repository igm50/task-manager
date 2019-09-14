import React from 'react'
import dayjs from 'dayjs'

import ContentsOnly from '../containers/templates/ContentsOnly'
import Calendar, { CalendarContext } from '../containers/organisms/Calendar'

const Main: React.FC = () => {
  const now = dayjs()
  const dummy_tasksList = [
    {
      day: 10,
      tasks: ['サンプルタスク']
    },
    {
      day: 12,
      tasks: ['タスク1', 'タスク2']
    }
  ]

  return (
    <CalendarContext.Provider
      value={{
        date: now,
        dayTaskList: dummy_tasksList
      }}
    >
      <ContentsOnly MainContents={Calendar}></ContentsOnly>
    </CalendarContext.Provider>
  )
}

export default Main
