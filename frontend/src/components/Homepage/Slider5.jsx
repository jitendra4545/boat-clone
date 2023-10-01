import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const videos=[
  {
    img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4",
    name:"SmartWatches",
    link:"/watch",
  },
  {
    img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_OyJHanx4QSdUN3OVGTO7C.mp4",
    name:"Neckbands",
    link: "/bluetoothHeadphone"
  },
  {
    img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4",
    name:"Wireless Earbuds",
    link:"/earbud",
  },
  {
    img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4",
    name:"Headphones",
    link:"/headphone",
  },
  {
    img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_j1TwOEeceKYOJc7d7mAim.mp4",
    name:"Wiresless Speakers",
    link:"/speaker",
  }





]

export const Slider5 = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(()=>{
attemptPlay()
  },[])

  return (
    

        
      



         <>
         <Box w='95%' display={'flex'} maxH={'auto'} gap={'7'} m='auto' sx={
          { 
         '::-webkit-scrollbar':{
                display:'none'
            }
         }
       }   overflowX={'auto'}
        >
           
           {
             videos.map((el,i)=>{
              return <Link to={el.link}> <Box maxH={'400px'} minW='350px'  key={i}
            
             >
     <video
               style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
               loop
               muted
              playsInline
           autoPlay             
                
               alt="All the devices"
               src={el.img}
               ref={videoEl}
             />
     <Text p='5px 0px' textAlign={'center'} fontWeight={'bold'}>{el.name}</Text> 
              </Box>
              </Link>
              })
           }
          
         </Box>
     
     
     
         </>
     






  )
}
