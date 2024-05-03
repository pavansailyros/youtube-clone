
import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard,  VideoCard } from "./";

const Videos = ({ videos, direction  }) => {
  

    console.log("Received videos prop:", videos);
  return (
    <Stack direction= { direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {/* {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoid && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))} */}
      {videos.map((item, index) => (
  <Box key={index}>
       
    {item.id?.videoId && <VideoCard video={item} />}
    {item.id?.channelId && <ChannelCard channelDetail={item} />}
  </Box>
))}
    </Stack>
  );
}

export default Videos;

//  import { Box, Stack } from '@mui/material';
// import React from 'react';
// import VideoCard from './VideoCard';
// import ChannelCard from './ChannelCard';

// const Videos = ({ videos }) => {
  
//     console.log(videos)
//   return (
//     <Stack
//       direction='row' 
//       flexWrap='wrap'
//       justifyContent='start'
//       gap={2}>
//       {videos.map((item, index) => (
//         <Box key={index}>
//           {item.id && item.id.videoId && <VideoCard video={item} />}
//           {item.id && item.id.channelId && <ChannelCard channelDetail={item} />}
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// export default Videos;




