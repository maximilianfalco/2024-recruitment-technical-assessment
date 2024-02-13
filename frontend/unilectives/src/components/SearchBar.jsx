import { Box, Dialog, InputBase, Typography } from '@mui/material'
import React, { useState } from 'react'
import { bodyWidth } from './Constants'

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  }
  const closeDialog = () => {
    setOpen(false);
  }

  return (
    <Box sx={{
      border: 'solid 0.1rem rgb(156 173 233)',
      borderRadius: '4px',
      height: '2.25rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: bodyWidth,
    }}>
      <Box sx={{ mx: '8px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width='1.5rem' height='1.5rem' viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(156 173 233)" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </Box>
      <InputBase onClick={openDialog} placeholder="Search for a course e.g. COMP1511" sx={{ 
        flexGrow: 1, 
        fontSize: '0.875em', 
        fontFamily: 'Demibold',
        lineHeight: '1.25rem', 
        fontWeight: '500', 
        color: 'rgb(156 173 233)', 
        px: 1.5, 
        py: 1,
        input: {
          "&::placeholder": {
            opacity: 1
          }
        } 
      }}/>
      <Dialog open={open} onClose={closeDialog}>
        <Box sx={{
          width: '15rem',
          height: '15rem',
          overflow: 'hidden'
        }}>
          <Box onClick={closeDialog} sx={{
            cursor: 'pointer',
            padding: '0.25rem',
            borderRadius: '50%',
            width: '1.5rem',
            height: '1.5rem',
            position: 'absolute',
            right: '0.5rem',
            top: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              backgroundColor: 'lightgray',
              transition: 'background-color 0.5s'
            }
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width='18' height='18' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </Box>
        </Box>
      </Dialog>
    </Box>
  )
}

export default SearchBar