import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { bodyWidth } from './Constants'

const TitleBar = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      boxSizing: 'border-box',
      pt: '40px',
    }}>
      <Stack gap={1.5} sx={{ width: bodyWidth }}>
        <Typography sx={{ fontFamily: 'Thin', fontWeight: 600 }}>
          DevSoc presents
        </Typography>
        <Typography variant='h1' sx={{ fontWeight: 'bold', fontSize: '4.5em', color: 'rgb(18 121 242)', fontFamily: 'Bold' }}>
          unilectives
        </Typography>
        <Typography sx={{ fontWeight: '550' }}>
          Your one-stop shop for UNSW course and elective reviews
        </Typography>

      </Stack>
    </Box>
  )
}

export default TitleBar