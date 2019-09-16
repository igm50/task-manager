import React, { useState, useContext } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/ja'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import InputBase from '@material-ui/core/InputBase'
import TextField from '@material-ui/core/TextField'

import TaskList from '../../components/atoms/TaskList'

dayjs.locale('ja')

interface Props {
  date: Dayjs
  tasks: Array<string>
  handleClose: () => void
  open: boolean
}

export const TaskDialogContext = React.createContext<Props>({
  date: dayjs(),
  tasks: [],
  handleClose: () => {},
  open: false
})

const TaskDialog: React.FC = () => {
  const context = useContext(TaskDialogContext)

  return (
    <Dialog onClose={context.handleClose} open={context.open}>
      <DialogTitle>{context.date.format('MMMMD')}日のタスク一覧</DialogTitle>
      <DialogContent>
        <TaskList tasks={context.tasks}></TaskList>
        <InputBase>
          <TextField></TextField>
        </InputBase>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDialog
