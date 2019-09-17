import React from 'react'

import ContentsOnly from '../containers/templates/ContentsOnly'
import Calendar, { CalendarContext } from '../containers/organisms/Calendar'

import useMain from '../hooks/useMain'

const Main: React.FC = () => {
  const calendarProps = useMain()

  return (
    <CalendarContext.Provider value={calendarProps}>
      <ContentsOnly MainContents={Calendar}></ContentsOnly>
    </CalendarContext.Provider>
  )
}

export default Main
