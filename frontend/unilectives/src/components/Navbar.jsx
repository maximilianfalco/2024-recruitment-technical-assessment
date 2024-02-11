import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import unilectives from '../unilectives-copy.svg'

const Navbar = () => {
  return (
    <Stack sx={{
      backgroundColor: 'rgb(249, 250, 251)',
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '5rem',
      padding: '1rem',
      boxSizing: 'border-box',
    }}>
      <Stack gap={2}>
        <img src={unilectives} alt='Unilectives Logo' style={{ width: '33px', height: '33px', alignSelf: 'center', cursor: 'pointer' }}/> 
        <Divider sx={{ height: 3, color: 'black' }}></Divider>
      </Stack>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1,
      }}>
        <Stack gap={2} sx={{ p: '1rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width='24' height='24' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width='24' height='24' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
        </Stack>
        <Stack gap={2} sx={{ p: '1rem' }}> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width='24' height='24' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width='24' height='24' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width='24' height='24' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width='24' height='24' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
          </svg>
        </Stack>
      </Box>





    </Stack>
  )
}

export default Navbar