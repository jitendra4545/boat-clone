import { Box, Button, Center, Flex, Image, Input, Tab, TabIndicator, TabList, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import {Search2Icon} from '@chakra-ui/icons'
export const Navbar = () => {
    return (
        <Box>
            <Flex boxShadow={'lg'}   >
            <Center w='20%'>
<Image src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' />
  </Center>
                <Box 
                flex='1'
                p="3"
                  display={'flex'} justifyContent={'space-around'} 
                 >

<Box>
<Tabs position="relative" variant="unstyled">
                        <TabList >
                            <Tab fontSize={'20px'}>Products</Tab>
                            <Tab fontSize={'20px'}>Sequence</Tab>
                            <Tab fontSize={'20px'}>Availibillity</Tab>
                            <Tab fontSize={'20px'}>Sequence</Tab>
                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="3px"
                            bg="red.500"
                            borderRadius="1px"
                        />
                    </Tabs>
</Box>
                  
                  <Box display={'flex'}>
                  <Input placeholder='Search Product By Name' />
                  <Button><Search2Icon/></Button>
                  </Box>

                  <Box>
                    some icon
                  </Box>

                    
                </Box>

            </Flex>
        </Box>
    )
}
