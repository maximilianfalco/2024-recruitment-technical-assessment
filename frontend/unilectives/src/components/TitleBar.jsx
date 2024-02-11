import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { bodyWidth } from './Constants'

const TitleBar = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      boxSizing: 'border-box',
      mt: '40px',
    }}>
      <Stack gap={1.5} sx={{ width: bodyWidth }}>
        <Typography>
          DevSoc presents
        </Typography>
        <Typography variant='h1' sx={{ fontWeight: 'bold', fontSize: '4.5em', color: '#1279f2' }}>
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