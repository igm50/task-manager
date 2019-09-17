import { useState, useMemo } from 'react'
import dayjs from 'dayjs'

import { CalendarProps, DayTasks } from '../containers/organisms/Calendar'

const useMain = () => {
  const [date, setDate] = useState(dayjs())
  const [dayTaskList, setDayTaskList] = useState<Array<DayTasks>>([])

  const calendarProps: CalendarProps = useMemo(() => {
    return { date: date, dayTaskList: dayTaskList }
  }, [date, dayTaskList])

  return calendarProps
}

export default useMain
