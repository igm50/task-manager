import { useState, useCallback } from 'react'
import _ from 'lodash'
import { AssertionError } from 'assert'

const useTasksList = (initialTasksList?: string[][]) => {
  const [tasksList, setTasksList] = useState(
    initialTasksList || _.range(31).map(() => [])
  )

  const validateIndex = useCallback((index: number) => {
    if (index < 0 || 30 < index)
      throw new AssertionError({ message: 'indexは0以上30以下のみ可' })
  }, [])

  const findTasks = useCallback(
    (index: number) => {
      validateIndex(index)
      const [tasks, addTask, deleteTask] = tasksList[index]
      return tasks
    },
    [tasksList, validateIndex]
  )

  return [findTasks]
}

export default useTasksList
