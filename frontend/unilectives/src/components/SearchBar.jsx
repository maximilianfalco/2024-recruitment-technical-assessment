import { Box, InputBase } from '@mui/material'
import React from 'react'
import { bodyWidth } from './Constants'

const SearchBar = () => {
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
      <InputBase placeholder="Search for a course e.g. COMP1511" sx={{ flexGrow: 1, fontSize: '0.875em', lineHeight: '1.25rem', fontWeight: '500', color: 'rgb(156 173 233)', px: 1.5, py: 1 }}/>
    </Box>
  )
}

export default SearchBar