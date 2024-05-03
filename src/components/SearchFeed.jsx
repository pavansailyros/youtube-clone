
import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}&maxResults=50`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error('Error fetching videos:', error));
  }, [searchTerm]);
  return (
    <Box
      p={2}
      sx={{
      overflowY: 'auto',
      height: '90vh',
      flex: 2
    }}
  >
    <Typography
      variant='h4'
      fontWeight='bold' 
      mb={2}
      sx={{color: 'white'}}  
    >
      Search results for: <span style={{color: '#F31503'}}>{searchTerm}</span> videos
    </Typography>
     <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed
