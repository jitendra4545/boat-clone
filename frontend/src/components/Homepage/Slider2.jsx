import { Box, Flex, Image, Img, Text } from '@chakra-ui/react';
import React from 'react'
import { useRef, useState } from "react";
// import data from "../../assest/db.json"






const category = [
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    "url": "https://www.boat-lifestyle.com/collections/true-wireless-earbuds",
    "name": "True Wireless Earbuds",
    "name_url": "https://www.boat-lifestyle.com/collections/true-wireless-earbuds"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Neckbands_bc6343f4-622f-4ebd-bb36-205643c3bf78_small.png?v=1684842854",
    "url": "https://www.boat-lifestyle.com/collections/wireless-earphones",
    "name": "Neckbands",
    "name_url": "https://www.boat-lifestyle.com/collections/wireless-earphones"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Smartwatches_88f12bcf-24bd-4e3a-aacb-ecc204f62179_small.png?v=1684842853",
    "url": "https://www.boat-lifestyle.com/collections/smart-watches",
    "name": "Smart Watches",
    "name_url": "https://www.boat-lifestyle.com/collections/smart-watches"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Headphones_small.png?v=1684842854",
    "url": "https://www.boat-lifestyle.com/collections/rockerz-headphones",
    "name": "Wireless Headphones",
    "name_url": "https://www.boat-lifestyle.com/collections/rockerz-headphones"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Speaker_small.png?v=1684842854",
    "url": "https://www.boat-lifestyle.com/collections/wireless-speakers",
    "name": "Wireless Speakers",
    "name_url": "https://www.boat-lifestyle.com/collections/wireless-speakers"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Wired-Headphones_small.png?v=1684842854",
    "url": "https://www.boat-lifestyle.com/collections/wired-headphones-1",
    "name": "Wired Headphones",
    "name_url": "https://www.boat-lifestyle.com/collections/wired-headphones-1"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Wired-Earphones_small.png?v=1684842854",
    "url": "https://www.boat-lifestyle.com/collections/wired-headphones",
    "name": "Wired Earphones",
    "name_url": "https://www.boat-lifestyle.com/collections/wired-headphones"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Soundbars_d9a7bdfd-e780-4581-ab85-f2e86f84cd28_small.png?v=1684842854",
    "url": "https://www.boat-lifestyle.com/collections/home-audio",
    "name": "Soundbars",
    "name_url": "https://www.boat-lifestyle.com/collections/home-audio"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Gaming-Headphones_small.png?v=1684842853",
    "url": "https://www.boat-lifestyle.com/collections/immortal-gaming",
    "name": "Gaming Headphones",
    "name_url": "https://www.boat-lifestyle.com/collections/immortal-gaming"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/w_de57f25b-de5b-4d1a-bed0-765975b25da8_small.png?v=1684847228",
    "url": "https://www.boat-lifestyle.com/collections/wireless-speakers",
    "name": "Party Speakers",
    "name_url": "https://www.boat-lifestyle.com/collections/wireless-speakers"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Trimmers_d0d346cf-b681-49b6-8942-835819bec2d1_small.png?v=1684842853",
    "url": "https://www.boat-lifestyle.com/collections/misfit-by-boat",
    "name": "Trimmers",
    "name_url": "https://www.boat-lifestyle.com/collections/misfit-by-boat"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Chargers_c290cb92-f132-412c-8387-f399a7aba423_small.png?v=1684842854",
    "url": "https://www.boat-lifestyle.com/collections/chargers",
    "name": "Chargers",
    "name_url": "https://www.boat-lifestyle.com/collections/chargers"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Powerbanks_small.png?v=1684842853",
    "url": "https://www.boat-lifestyle.com/collections/power-banks",
    "name": "Power banks",
    "name_url": "https://www.boat-lifestyle.com/collections/power-banks"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Cables_3c471ad3-9d08-426a-9d16-a6df00687ff0_small.png?v=1684842854",
    "url": "https://www.boat-lifestyle.com/collections/cables",
    "name": "Cables",
    "name_url": "https://www.boat-lifestyle.com/collections/cables"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Car-Accessories_6adfe1a9-384f-46ef-b45d-50761eb5cca6_small.png?v=1684842853",
    "url": "https://www.boat-lifestyle.com/collections/car-accessories",
    "name": "Car Accessories",
    "name_url": "https://www.boat-lifestyle.com/collections/car-accessories"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/T-rebel_small.png?v=1684842854",
    "url": "https://www.boat-lifestyle.com/collections/trebel-for-women",
    "name": "TRebel Range",
    "name_url": "https://www.boat-lifestyle.com/collections/trebel-for-women"
  },
  {
    "image": "https://www.boat-lifestyle.com/cdn/shop/files/Limited-Edition_90154b16-39c9-4461-a96d-a818d791fb99_small.png?v=1684842854",
    "url": "https://www.boat-lifestyle.com/collections/limited-edition",
    "name": "Limited Editions",
    "name_url": "https://www.boat-lifestyle.com/collections/limited-edition"
  }
]


export const Slider2 = () => {
  
  return (
    
    <>
    <Box w='95%' m='auto'   overflowX={'scroll'} overflowY={'hidden'}>
      <Box p='0px 20px' display={'grid'} gridTemplateColumns={'repeat(17,1fr)'} gap='7' w='2500px'>
      {
        category.map((el, i) => {

          return <Box bg={'white'} borderRadius={'10px 10px 0px 0px'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} p='10px 10px' >
            <Image w='100%'  src={el.image} />
            <Text fontWeight={'semibold'} textAlign={'center'}>{el.name}</Text>
          </Box>
        })
      }
      </Box>
     
    </Box>



    </>

  )
}
