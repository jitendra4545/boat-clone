import { Box, Button, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiStar } from 'react-icons/fi'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
const color = [{ c: 'red' }, { c: 'blue' }, { c: 'green' }, { c: 'grey' }]

export const ProductCard = ({ _id, feature, feature2, feature3, feature4,priority, price, price2
    , rating__stars
    , product_item__primary_image
    , product_item_meta__title }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
const [discount,setDiscount]=useState(price2-price)

    const navigate = useNavigate()

    return (
        <Box bg={'#E2E8F0'} p='5px'  borderRadius={'10px'} boxShadow={'md'} gap='2' display={'flex'} w='auto'>
            <Box borderRadius={'10px'} bg='#EDF2F7' w='35%' >
                <Image  onClick={() => navigate(`/product/${_id}`)} borderRadius={'10px 10px 0px 0px'} w='100%' src={product_item__primary_image} />
                <Box p='6px 0px' display={'flex'} justifyContent={'center'} alignItems={'center'}  textAlign={'center'} fontWeight={'bold'} borderRadius={'0px 0px 10px 10px'}  bg={'#fcc50b'}>
                   <Text textAlign={'center'} fontSize={'13px'}>{priority?priority:"BT calling"}</Text>
                </Box>
            </Box>
            <Box display={'flex'} borderRadius={'10px'} w='65%' bg='' p='6px 15px' >
                <Box w='100%' >
                    <Box gap='1' display={'flex'}  >
                        {/* bg={'#F7FAFC'}  */}
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} color={'green'}>
                            <FiStar />
                        </Box>
                        <Box fontWeight={'bold'}>
                            {rating__stars}
                        </Box>
                    </Box>
                    <Heading noOfLines={1} textAlign={'left'} fontSize={'lg'} mt='7px' mb='7px'>{product_item_meta__title}</Heading>

                    <Box display={'flex'} gap='1'>
                        <Text fontWeight={'bold'}> ₹{price} </Text>
                        <Text fontSize={'15px'} textDecoration={"line-through"}>{price2}</Text>
                        <Text fontSize={'13px'} fontWeight={'bold'} color={'green'}>{Math.round(discount/ price2 * 100)}{" % OFF"} </Text>
                    </Box>

                    <Box mt={'5px'} mb='5px' border={'1px solid grey'}>
                    </Box>
                    <Box display={'flex'} gap='3'>
                        <Box borderRadius={'10px'} p='2px 5px' fontSize={'13px'} bg={'skyblue'}>
                            {feature ? feature : "Clear Calling"}
                        </Box>
                        <Box borderRadius={'10px'} p='2px 5px' fontSize={'13px'} bg={'skyblue'}>
                            {feature2 ? feature2 : " ASAP™ Charge"}

                        </Box>
                        {/* {
                            feature3 && <Box borderRadius={'10px'} p='2px 5px' fontSize={'13px'} bg={'#eff4f7'}>
                                {feature3}

                            </Box>
                        }
                        {
                            feature4 && <Box borderRadius={'10px'} p='2px 5px' fontSize={'13px'} bg={'#eff4f7'}>
                                {feature3}

                            </Box>
                        } */}
                    </Box>
                    <Box p='10px 0px 0px 0px'>
                        <Button onClick={onOpen} _hover={{ bg: 'black' }} w='100%' bg={'black'} color={'white'} >
                            ADD TO CART
                        </Button>
                    </Box>



                </Box>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody w={'100%'} p={'20px'} display={'flex'}>
                        <Box borderRadius={'10px'} w='40%' >
                            <Image borderRadius={'10px 10px 10px 10px'} w='100%' src={product_item__primary_image} />
                            {/* <Box textAlign={'center'} fontWeight={'bold'} borderRadius={'0px 0px 10px 10px'} h='15%' bg={'yellow'}>
                   <Heading> {brand}</Heading> 
                </Box> */}
                            <Box p='30px 0px 0px 0px'>
                                <Button _hover={{ bg: 'black' }} w='100%' bg={'black'} color={'white'} >
                                    ADD TO CART
                                </Button>
                            </Box>
                            <Box p='8px 0px 0px 0px'>
                                <Button border={'1px solid #2f5b96'} onClick={() => navigate(`/product/${_id}`)} textAlign={'center'} _hover={{ bg: 'white' }} w='100%' bg={'white'} color={'#2f5b96'} >
                                    <span style={{ marginRight: '5px' }}>View Details</span>  <BsFillArrowRightCircleFill />
                                </Button>
                            </Box>
                        </Box>
                        <Box display={'flex'} borderRadius={'10px'} w='60%' p='6px 15px' >
                            <Box w='100%' >
                             
                                <Heading textAlign={'left'} fontSize={'3xl'} mt='7px' mb='15px'>{product_item_meta__title}</Heading>

                                <Box display={'flex'} gap='1'>
                                    <Text fontWeight={'bold'}> ₹{price} </Text>
                                    <Text fontSize={'15px'} textDecoration={"line-through"}>{price2}</Text>
                                    <Text fontSize={'13px'} fontWeight={'bold'} color={'green'}>{Math.ceil(price2 - price) * 10}{" % OFF"} </Text>
                                </Box>

                                <Box mt={'5px'} mb='5px' border={'1px solid grey'}>
                                </Box>
                                <Box bg='#eff4f7' borderRadius={'7px'} p='5px 0px 5px 25px'>
                                <ul >
                        <li borderRadius={'10px'} p='2px 5px' fontSize={'13px'} bg={'#eff4f7'}>
                            {feature ? feature : "Clear Calling"}
                        </li>
                        <li borderRadius={'10px'} p='2px 5px' fontSize={'13px'} bg={'#eff4f7'}>
                            {feature2 ? feature2 : " ASAP™ Charge"}

                        </li>
                       {
                            feature3 && <li borderRadius={'10px'} p='2px 5px' fontSize={'13px'} bg={'#eff4f7'}>
                                {feature3}

                            </li>
                        }
                         {
                            feature4 && <li borderRadius={'10px'} p='2px 5px' fontSize={'13px'} bg={'#eff4f7'}>
                                {feature3}

                            </li>
                        }
</ul>
                                </Box>
                             
                                <Box p='10px 0px'>
                                    <Heading fontSize={'md'} >Choose Your Color :</Heading>
                                    <Box p={'10px'} display={'flex'} gap='2'>
                                        {
                                            color.map((el) => {
                                                return <Box bg={el.c} borderRadius={'50%'} h='30px' w='30px'></Box>
                                            })
                                        }
                                    </Box>

                                </Box>


                            </Box>
                        </Box>
                    </ModalBody>


                </ModalContent>
            </Modal>
        </Box>
    )
}
