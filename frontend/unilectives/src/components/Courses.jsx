import React from 'react'
import { Grid, Box } from '@mui/material';
import { bodyWidth } from './Constants'
import CourseCard from './CourseCard';

const Courses = () => {
  return (
    <Box sx={{
      width: bodyWidth,
      mt: '40px',
      boxSizing: 'border-box'
    }}>
      <Grid container spacing='3rem'>
        <Grid item xs={4}>
          <CourseCard/>
        </Grid>
        <Grid item xs={4}>
          <CourseCard/>
        </Grid>
        <Grid item xs={4}>
          <CourseCard/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Courses