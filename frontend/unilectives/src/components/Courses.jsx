import {React, useEffect } from 'react'
import { Grid, Box } from '@mui/material';
import { bodyWidth } from './Constants'
import CourseCard from './CourseCard';
import courseData from '../courses.json';

const Courses = () => {

  return (
    <Box sx={{
      width: bodyWidth,
      mt: '40px',
      boxSizing: 'border-box'
    }}>
      <Grid container spacing='3rem'>
        {courseData.map(course => (
          <Grid item xs={4} key={course.course_prefix + course.course_code} title={course.course_prefix + course.course_code}>
            <CourseCard details={course}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Courses