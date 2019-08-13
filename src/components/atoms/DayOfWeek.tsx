import React from 'react'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'

interface Props {
  classes: Record<'headerCard', string>
  title: string
}

const DayOfWeek: React.FC<Props> = props => {
  return (
    <Card className={props.classes.headerCard}>
      <CardHeader title={props.title}></CardHeader>
    </Card>
  )
}

export default DayOfWeek
