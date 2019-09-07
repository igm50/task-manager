import React from 'react'
import { Dayjs } from 'dayjs'

import Typography from '@material-ui/core/Typography'

interface Props {
  date: Dayjs
}

const Date: React.FC<Props> = props => {
  return (
    <Typography>
      {props.date.month() + 1 + '月' + props.date.date() + '日'}
    </Typography>
  )
}

export default Date
