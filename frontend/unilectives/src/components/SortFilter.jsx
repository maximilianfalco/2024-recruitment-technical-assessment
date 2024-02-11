import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { bodyWidth } from './Constants'

const SortFilter = () => {
  return (
    <Box sx={{
      width: bodyWidth,
    }}>
      <Box sx={{
        mt: '1rem',
        display: 'flex',
        alignSelf: 'flex-start',
        border: 'solid 0.8px rgb(152, 152, 152)',
        borderRadius: '6px',
        px: '1rem',
        py: '0.5rem',
        maxWidth: '200px',
        minWidth: '150px',
        boxSizing: 'border-box',
        boxShadow: '0px 2px 2px rgba(0,0,0,.1)',
      }}>
        <button style={{
          display: 'flex',
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '24px',
          backgroundColor: 'white',
          border: '0px',
          cursor: 'pointer',
          padding: 0,
        }}>
          <Typography sx={{ opacity: 0.5, fontSize: '1.2em', fontFamily: 'Thin' }}>Sort by</Typography>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width='16px' height='16px' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </Box>
    </Box>
  )
}

export default SortFilter