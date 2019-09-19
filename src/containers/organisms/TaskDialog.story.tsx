import React from 'react'
import dayjs from 'dayjs'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '@material-ui/core/Button'

import TaskDialog, { TaskDialogContext } from './TaskDialog'
import { useState } from '@storybook/addons'

const division = 'containers/organisms/タスクダイアログ'
const clickEventHandler = (value: string) => action(value)()

storiesOf(division, module).add('タスク無し', () => {
  const date = dayjs('2020-10-10')
  const [open, setOpen] = useState(false)

  return (
    <TaskDialogContext.Provider
      value={{
        date: date,
        tasks: [],
        handleClose: () => setOpen(false),
        clickEventHandler: clickEventHandler,
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
        clickEventHandler: clickEventHandler,
        open: open
      }}
    >
      <Button onClick={() => setOpen(true)}>ダイアログを開く</Button>
      <TaskDialog></TaskDialog>
    </TaskDialogContext.Provider>
  )
})
