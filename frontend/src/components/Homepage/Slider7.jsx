import { Box, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'


const data=[
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_lp1quse6ybwbgyha5sslft6x.mp4",
        title:"Storm Call 2",
        price:"1499",
        strike_price:"7499",
        discount:"80"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_gMW8dkmTGwBEODDUSPloV.mp4",
        title:"Airdopes 141 ANC",
        price:"1599",
        strike_price:"5990",
        discount:"73"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_bZpYboXLt5HjZH6TcgFhd.mp4",
        title:"Nirvana 525 ANC",
        price:"2799",
        strike_price:"4990",
        discount:"44"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_B4hoCPpeRsCA51zv0jpdo.mp4",
        title:"PB 300",
        price:"1199",
        strike_price:"2999",
        discount:"60"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_rOwdUwtWqlwAedPCUOJXu.mp4",
        title:"Lunar Connect Ace",
        price:"2699",
        strike_price:"9499",
        discount:"72"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_oegv9y5uxixy96p8fma3ancg.mp4",
        title:"Wave Astra",
        price:"1899",
        strike_price:"7499",
        discount:"75"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_aNz4Fw16bi3AuSEOPGMQ4.mp4",
        title:"Lunar Call Plus",
        price:"3299",
        strike_price:"9999",
        discount:"67"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_8ket9Elb4le2vwsG2qKMz.mp4",
        title:"Ultima Connect max",
        price:"2199",
        strike_price:"8999",
        discount:"76"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_ZfPQgdbg6tENXmHDOVAJp.mp4",
        title:"Lunar Call Pro",
        price:"4299",
        strike_price:"6990",
        discount:"38"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_qjfegTve441tXqDYUdRyb.mp4",
        title:"Wave Flex Connect",
        price:"1499",
        strike_price:"7990",
        discount:"81"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_aqmrdpvl38dppzvfwa5zs4h3.mp4",
        title:"Airdopes 170",
        price:"1199",
        strike_price:"3490",
        discount:"66"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_ua92lpdtzx5pm1q5g1astla4.mp4",
        title:"immortal 131",
        price:"999",
        strike_price:"3490",
        discount:"57"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_bniycazt7v6scs8dshgrhan3.mp4",
        title:"Airdopes Atom 83",
        price:"1499",
        strike_price:"3490",
        discount:"57"
    },
    ,
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/quinn_ks0aBr7jUhF5HiDoIE2zR.mp4",
        title:"Wave Style Call",
        price:"1099",
        strike_price:"7990",
        discount:"86"
    }
]


export const Slider7 = () => {

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
    <Box  w='95%' display={'flex'} maxH={'600px'}  m='auto' gap='4' sx={
        {
            '::-webkit-scrollbar': {
                display: 'none'
            }
        }
    } overflowX={'auto'}
    >
   {
    data.map((el,i)=>{
      return  <Box  border={'1px solid grey'} borderRadius={'10px'}  maxH={'600px'} minW={'280px'}   key={i}>
                <video
               style={{ maxWidth: "400px", maxHeight:"500px" ,margin: "0 auto" }}
               loop
               muted
              playsInline
           autoPlay             
                
               alt="All the devices"
               src={el.img}
               ref={videoEl}
             />
             <Text textAlign={'center'} fontSize={'xl'} fontWeight={'bold'}>{el.title}</Text>
                <Box p='5px 10px' mt='5px' display={'flex'}  justifyContent={'space-evenly'}  > <Text fontSize={'lg'}  fontWeight={'bold'} >₹ {el.price}</Text>
                 <Text textDecoration={'line-through'}  fontWeight={'normal'} color={'grey'} fontSize={'lg'}>₹ {el.strike_price}</Text>
                 <Text fontWeight={'bold'} color={'green.300'} >{el.discount} % off</Text>
                 {/* <Button mt='5px' w='full' borderRadius={'30px'} bg='white' _hover={{bg:"white"}} border={'1px solid black'}  fontWeight={'normal'}>Read More <BsArrowRightShort/></Button> */}
                 </Box>
            </Box>
    })
   }



    </Box>



</>
  )
}
