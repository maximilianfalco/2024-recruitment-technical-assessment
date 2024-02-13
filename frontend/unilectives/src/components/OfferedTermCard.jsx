import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const OfferedTermCard = (props) => {
  return (
    <Box sx={{
      borderRadius: '1000px',
      py: '0.25rem',
      px: '0.5rem',
      backgroundColor: 'rgb(204 235 246)',
      width: 'fit-content', 
    }}>
      <Typography sx={{
        fontSize: '0.7em',
        lineHeight: '1rem',
        fontFamily: 'regular',
      }}>
        {props.label}
      </Typography>
    </Box>
  )
}

export default OfferedTermCard