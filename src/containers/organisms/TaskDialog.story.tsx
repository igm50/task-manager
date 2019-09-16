import React from 'react'
import dayjs from 'dayjs'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import TaskDialog, { TaskDialogContext } from './TaskDialog'

const division = 'containers/organisms/タスクダイアログ'

storiesOf(division, module).add('サンプル', () => {
  const date = dayjs('2020-10-10')

  return (
    <TaskDialogContext.Provider
      value={{
        date: date,
        tasks: ['タスクタスクタスクタスク', 'タスクタスクタスクタスク'],
        handleClose: action('Close Dialog'),
        open: true
      }}
    >
      <TaskDialog></TaskDialog>
    </TaskDialogContext.Provider>
  )
})
