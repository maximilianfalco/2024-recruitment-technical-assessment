import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const TitleBar = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      boxSizing: 'border-box',
      // backgroundColor: 'blue'
    }}>
      <Stack gap={1.5} sx={{ mt: '40px', width: '84%',  }}>
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