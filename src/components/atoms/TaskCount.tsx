import React from 'react'

import Typography from '@material-ui/core/Typography'

interface Props {
  count: number
}

const TaskCount: React.FC<Props> = props => {
  return <Typography align="center">{props.count}件</Typography>
}

export default TaskCount
