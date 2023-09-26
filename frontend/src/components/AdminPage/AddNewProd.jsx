import { Box, Button, FormControl, FormLabel, Heading, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AdminNav } from './AdminNav'
import { AdminSidebar } from './AdminSidebar'

export const AddNewProd = () => {
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
    const [price2, setprice2] = useState("")
    const [priority, setpriority] = useState("")
    const [feature, setfeature] = useState("")
    const [feature2, setfeature2] = useState("")
    const [feature3, setfeature3] = useState("")
    const [priority2, setpriority2] = useState("")
    const [priority3, setpriority3] = useState("")
    const [product_item_meta__title, setproduct_item_meta__title] = useState("")
    const [product_item__primary_image, setproduct_item__primary_image] = useState("")
    const [product_item__secondary_image, setproduct_item__secondary_image] = useState("")
    return (
        <Box>
            <AdminNav />
            <Box h='90vh' display={'grid'} gap='5' gridTemplateColumns={'230px auto'}>
                <AdminSidebar />
                <Box border={'1px solid blue'} >
                    <Box color={'white'} bg='blue.900' paddingTop={'20px'} paddingBottom={'20px'} >
                        <Heading textAlign={'center'} fontSize={'20px'}>ADD NEW PRODUCTS</Heading>
                    </Box>

                    <Box bg='skyblue' h='80vh' p='30px'>
                        <Box display={'grid'} gap='6' gridTemplateColumns={"repeat(3,1fr)"}  >
                            <FormControl isRequired>
                                <FormLabel>Category</FormLabel>
                                <Select onChange={(e) => setcategory(e.target.value)}>
                                    <option value="">Select Category</option>
                                    <option value="bluetoothHeadphone">BluetoothHeadphone</option>
                                    <option value="watch">Smart Watch</option>
                                    <option value="earbud">EarBud</option>
                                    <option value="speaker">Speaker</option>
                                    <option value="headphone">HeadPhone</option>
                                </Select>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Title</FormLabel>
                                <Input onChange={(e) => setproduct_item_meta__title(e.target.value)} placeholder='Enter Title' />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Product Image</FormLabel>
                                <Input onChange={(e) => setproduct_item__primary_image(e.target.value)} placeholder='Enter Url' type='url' />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Product Secondary Image</FormLabel>
                                <Input onChange={(e) => setproduct_item__secondary_image(e.target.value)} placeholder='Enter Url' type='url' />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Original Price</FormLabel>
                                <Input placeholder='Enter Price' onChange={(e) => setprice(e.target.value)} type='number' />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Discounted Price</FormLabel>
                                <Input onChange={(e) => setprice2(e.target.value)} placeholder='Enter Price' type='number' />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Feature</FormLabel>
                                <Input onChange={(e) => setfeature(e.target.value)} placeholder='Add Feature' />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Feature 2</FormLabel>
                                <Input onChange={(e) => setfeature2(e.target.value)} placeholder='Add Feature' />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Feature 3</FormLabel>
                                <Input onChange={(e) => setfeature3(e.target.value)} placeholder='Add Feature' />
                            </FormControl>

                            <FormControl is isRequired>
                                <FormLabel>Priority</FormLabel>
                                <Input onChange={(e) => setpriority(e.target.value)} placeholder='Add Priority' />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Priority 2</FormLabel>
                                <Input onChange={(e) => setpriority2(e.target.value)} placeholder='Add Priority' />
                            </FormControl>

                            <FormControl >
                                <FormLabel>Priority 3</FormLabel>
                                <Input onChange={(e) => setpriority3(e.target.value)} placeholder='Add Priority' />
                            </FormControl>


                        </Box>

                        <Box mt='30px' textAlign={'center'}>
                            <Button color={'white'} bg='blue.900'>Add Product</Button>
                        </Box>

                    </Box>

                </Box>
            </Box>
        </Box>
    )
}
