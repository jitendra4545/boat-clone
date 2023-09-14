import { ArrowBackIcon, ArrowForwardIcon, DownloadIcon } from '@chakra-ui/icons'
import { Box, Button, Image, Input, Radio } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const slide = [
    "https://www.boat-lifestyle.com/cdn/shop/files/Wave_Elevate_WEB_NEW_1440x.jpg?v=1693986932",
    "https://www.boat-lifestyle.com/cdn/shop/files/IMG_0909_1440x.jpg?v=1693583898",
    "https://www.boat-lifestyle.com/cdn/shop/files/Wave_Sigma_WEB_ab42ec20-2ddd-4069-8299-9808e883b4f8_1440x.jpg?v=1693828299",
    "https://www.boat-lifestyle.com/cdn/shop/files/Lunar_ORB_WEB_1_1440x.jpg?v=1693547730",

]


export const Slider = () => {
    const [int, setint] = useState(null)
    const [count, setcount] = useState(0)
    const handleNext = () => {
        setcount((prevIndex) => (prevIndex + 1) % slide.length)
    }

    const handlePrevious = () => {
        if (count == 0) {
            setcount(slide.length - 1)
        } else {
            setcount(count - 1)
        }
    }



    useEffect(() => {
        if (int) {
            clearInterval(int)
            setint(null)
            console.log('called')
        }

        setint(setInterval(handleNext, 4000))
    }, [])


    return (
        <Box>
            <Box display={"flex"}  >
               
                <Image w='100%' src={slide[count]} />

                {/* <Button _hover={{ bg: 'blue' }} borderRadius={'50%'} bg={'black'} color={'white'} left='0' position={'absolute'} onClick={handlePrevious} top={'50%'} ><ArrowBackIcon fontSize={'20px'} /></Button>
                <Button _hover={{ bg: 'blue' }} borderRadius={'50%'} bg={'black'} color={'white'} right={'0'} position={'absolute'} onClick={handleNext} top={'50%'} ><ArrowForwardIcon fontSize={'20px'} /></Button> */}
            </Box>
            <Box mt='20px' display={'flex'} justifyContent={'center'} gap={6} alignItems={'center'}>
                {
                    slide.map((el,i)=>{
                      return <>
                       <Box boxShadow={' rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;'}  h='10px' w='10px' borderRadius={'md'}  onClick={()=>setcount(i)} 
                      bg={i==count?"blue":"white"}
                    
                       
                         >
                            
                        </Box>
                        
                      </> 
                     
                    })
                }
            </Box>
        </Box>
    )
}
