import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

const InfoBox = ({ title, cases, isRed, isGrey, active, total, ...props }) => {
  return (
    <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'} ${isGrey && 'infoBox--grey'}`}>
      <CardContent>
        <Typography className='infoBox__title' color='textSecondary'>
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'} ${isGrey && 'infoBox__cases--grey'}`}>{cases}</h2>
        <Typography className='infoBox__total' color='textSecondary'>
          {total}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox
