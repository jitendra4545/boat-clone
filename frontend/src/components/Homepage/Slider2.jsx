import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react'
import { useRef, useState } from "react";
// import data from "../../assest/db.json"


const video=[
    {
        "img":"www.boat-lifestyle.com/cdn/shop/files/quinn_N8V0FmOXVCG4QfYvPSp1w.jpg?v=6926631039531719009",
        "vid":"www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4?v=5354683704256941483",
        "title":"Smart Watches"
    },
    {
        "img":"www.boat-lifestyle.com/cdn/shop/files/quinn_9O6xvZXZ3kYLbUbtsnj4S.jpg?v=10589554669730693856",
        "vid":"www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4?v=6517359867084812371",
        "title":"Wireless Earbuds"
    },
    {
        "img":"www.boat-lifestyle.com/cdn/shop/files/quinn_KXwTUL2r91fh5uAHqSyIH.jpg?v=14850539122786675893",
        "vid":"www.boat-lifestyle.com/cdn/shop/files/quinn_OyJHanx4QSdUN3OVGTO7C.mp4?v=14150048875423312161",
        "title":"Neckbands"
    },
    {
        "img":"www.boat-lifestyle.com/cdn/shop/files/quinn_v90hMzAEa585W2YTUR9UF.jpg?v=17250700239301190396",
        "vid":"www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4?v=14881283340894746343",
        "title":"Headphones"
    },
    {
        "img":"www.boat-lifestyle.com/cdn/shop/files/quinn_FY7dfyFMiXzNTqSLFu2lV.jpg?v=12472483265184956393",
        "vid":"www.boat-lifestyle.com/cdn/shop/files/quinn_j1TwOEeceKYOJc7d7mAim.mp4?v=1094892159472399894",
        "title":"Wireless Speakers"
    }
]


export const Slider2 = () => {
    const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
const [Video,setVideo]=useState(video)
//   console.log(Video)

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
//     height="100%"
//                 src="your-video-url.mp4" // Replace with your video URL
//                 autoPlay
//                 controls
//               />
//             )} */}
//           </Box>
//         })
//     }


//     </Flex>
//   );<Flex
//       overflowX="auto"
//       width="100%"
//       align="center"
//       ref={containerRef}
//     //   onMouseEnter={handleMouseEnter}
//     //   onMouseLeave={handleMouseLeave}
//     >
        
//     {
//         video.map((el,index)=>{
//             console.log(el.img)
//        return     <Box
//             // key={index}
//             //  // Adjust the height of your product posters
//             // border="1px solid #ccc"
//             // p="4"
//             // textAlign="center"
//             // mr="4" // Adjust the margin-right as needed
//             // position="relative"
//           >
           
//             <Image
//               src={el.img}
             
             
//             />
//             {/* {isHovered && (
//               <video
//                 position="absolute"
//                 top="0"
//                 left="0"
//                 width="100%"
                

<Box>
    
</Box>




  )
}
