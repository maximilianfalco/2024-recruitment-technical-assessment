import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import OfferedTermCard from './OfferedTermCard';

const CourseCard = (props) => {
  const details = props.details;
  const code = details.course_prefix + details.course_code;
  const desc = details.course_title;
  const ratingWidth = 120;
  const ratingColoured = details.average_stars/5 * ratingWidth + 'px';
  const reviews = details.total_reviews;
  const offerings = details.offered_terms;

  const starSize = '2rem';
  const starSpacing = '-3px';

  return (
    <Box sx={{
      px: '1.5rem',
      py: '1.75rem',
      borderRadius: '0.75rem',
      backgroundColor: '#FAFAFA',
      boxShadow: '0 4px 6px -2px rgba(0,0,0,.3)',
      cursor: 'pointer',
      boxSizing: 'border-box',
      '&:hover': {
        backgroundColor: 'rgba(239,239,240,0.5)',
      }
    }}>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
        <Typography variant='h5' sx={{ fontFamily: 'Black' }}>
          {code}
        </Typography>
        <Stack>
          <Box name='rating' sx={{ width: 'fit-content' }}>
            <Typography sx={{ 
              position: 'absolute',
              color: 'rgb(183 137 229)',
              width: ratingColoured,
              fontSize: starSize,
              letterSpacing: starSpacing,
              lineHeight: '2rem',
              overflow: 'hidden',
            }}>
              ★★★★★
            </Typography>
            <Typography sx={{
              color: 'hsla(0,0%,60%,.3)',
              width: `${ratingWidth}px/`,
              fontSize: starSize,
              letterSpacing: starSpacing,
              lineHeight: '2rem',
              overflow: 'hidden',
            }}>
              ★★★★★
            </Typography>
          </Box>
          <Typography sx={{ fontSize: '0.75rem', lineHeight: '1rem', fontWeight: '100' }}>
            {reviews} reviews
          </Typography>
        </Stack>
      </Box>
      <Typography sx={{
        mt: '0.5rem',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        wordBreak: 'break-all',
        overflow: 'hidden',
        height: '4rem',
      }}>
        {desc}
      </Typography>
      <Box sx={{
        mt: '0.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        {offerings.map(offering => (
          <OfferedTermCard label={offering}/>
        ))}
      </Box>
    </Box>
  )
}

export default CourseCard