// import { Box, Stack, Typography } from '@mui/material'
// import React from 'react'
// import Sidebar from './Sidebar'
// import Videos  from './Videos'
// import { useState, useEffect } from 'react'
// import { fetchFromAPI } from '../utils/fetchFromAPI'

// const Feed = () => {
//   const [selectedCategory, setSelectedCategory] = useState('New');
//   const [videos, setVideos] = useState([])
//   // console.log("Received videos prop in parent component:", videos);

//   useEffect(() => {
//     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
//     .then((data) => setVideos(data.items))
//   },[selectedCategory])
//   return (
//    <Stack 
//    sx={{ flexDirection: { sx: "column", md: "row"}}}
//    >
//     <Box 
//     sx={{ height: {sx: "auto", md: '92vh'},
//     borderRight: '1px solid #3d3d3d',
//     px: { sx: 0, md: 2 }}}
//     >
//       <Sidebar
//       selectedCategory= 
//         {selectedCategory}
//         setSelectedCategory=
//         {setSelectedCategory}/>
//       <Typography 
//       className='copyright'
//       variant='body2'
//       sx={{mt: 1.5, color: '#fff'}}>
//         Copyright 2024 PA1Media
//       </Typography>
//     </Box>

//     <Box
//       p={2}
//       sx={{
//         overflowY: 'auto',
//         height: '90vh',
//         flex: 2
//            }}>
//       <Typography
//         variant='h4'
//         fontWeight='bold' 
//         mb={2}
//         sx={{color: 'white'}}  >
//         {selectedCategory}<span
//              style={{color: '#F31503'}}>Videos</span>
//       </Typography>

//       <Videos videos={[videos]} />
//     </Box>
//    </Stack>
//   )
// }

// export default Feed






////
import { Box, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}&maxResults=50`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error('Error fetching videos:', error));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
      <Box 
        sx={{
          height: { sx: "auto", md: '92vh'},
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 }
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography 
          className='copyright'
          variant='body2'
          sx={{mt: 1.5, color: '#fff'}}
        >
          Copyright 2024 PA1Media
        </Typography>
      </Box>

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
          {selectedCategory}<span style={{color: '#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
