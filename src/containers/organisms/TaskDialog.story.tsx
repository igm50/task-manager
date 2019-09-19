import React from 'react'
import dayjs from 'dayjs'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '@material-ui/core/Button'

import TaskDialog, { TaskDialogContext } from './TaskDialog'
import { useState } from '@storybook/addons'

const division = 'containers/organisms/タスクダイアログ'
const registerTask = (value: string) => action(value)()
const deleteTask = (index: number) => action(index.toString())()

storiesOf(division, module).add('タスク無し', () => {
  const date = dayjs('2020-10-10')
  const [open, setOpen] = useState(false)

  return (
    <TaskDialogContext.Provider
      value={{
        date: date,
        tasks: [],
        handleClose: () => setOpen(false),
        registerTask: registerTask,
        deleteTask: deleteTask,
        open: open
      }}
    >
      <Button onClick={() => setOpen(true)}>ダイアログを開く</Button>
      <TaskDialog></TaskDialog>
    </TaskDialogContext.Provider>
  )
})

storiesOf(division, module).add('タスクを含む', () => {
  const date = dayjs('2020-10-10')
  const [open, setOpen] = useState(false)

  return (
    <TaskDialogContext.Provider
      value={{
        date: date,
        tasks: ['タスクタスクタスクタスク', 'タスクタスクタスクタスク'],
        handleClose: () => setOpen(false),
        registerTask: registerTask,
        deleteTask: deleteTask,
        open: open
      }}
    >
      <Button onClick={() => setOpen(true)}>ダイアログを開く</Button>
      <TaskDialog></TaskDialog>
    </TaskDialogContext.Provider>
  )
})
