import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { bodyWidth } from './Constants'

const TitleBar = () => {
  const [red, setRed] = useState(18);
  const [green, setGreen] = useState (121);
  const [blue, setBlue] = useState(242);

  const getRandomColorValue = () => {
    return Math.floor(Math.random() * 256);
  }

  const generateNewColor = () => {
    setRed(getRandomColorValue());
    setGreen(getRandomColorValue());
    setBlue(getRandomColorValue());
  }

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
        <Typography variant='h1' onClick={generateNewColor} sx={{
          fontWeight: 'bold',
          fontSize: '4.5em',
          color: `rgb(${red} ${green} ${blue})`,
          fontFamily: 'Bold',
          cursor: 'pointer'
        }}>
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