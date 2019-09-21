import { useState, useMemo } from 'react'
import dayjs from 'dayjs'

import { CalendarProps, DayTasks } from '../containers/organisms/Calendar'

const useMain = () => {
  const nowDate = useMemo(() => dayjs(), [])
  const [dayTaskList, setDayTaskList] = useState<Array<DayTasks>>([])

  const calendarProps: CalendarProps = useMemo(() => {
    return { date: nowDate, dayTaskList: dayTaskList }
  }, [nowDate, dayTaskList])

  return calendarProps
}

export default useMain
