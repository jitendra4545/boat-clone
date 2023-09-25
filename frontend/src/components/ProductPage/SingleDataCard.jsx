import { Box, Button, Heading, Image, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsHandbagFill } from 'react-icons/bs'
import { FiStar } from 'react-icons/fi'
import { ProductPageFooter } from '../../Pages/ProductPageFooter'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CartAdd } from '../../redux/CartReducer/action'
const color = [{ c: 'red' }, { c: 'blue' }, { c: 'green' }, { c: 'grey' }]
export const SingleDataCard = ({ data }) => {
    console.log("s", data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toast = useToast()
    const [url, seturl] = useState("")
    const [discount, setDiscount] = useState(data[0]?.price2 - data[0]?.price)
    const handleUrl = (a) => {
        seturl(a)
    }

    const handleCart=(id)=>{
        dispatch(CartAdd({ id })).then(() => {
            toast({
                title: 'Product Successfully Added',
                description: "Congratulatios! Product added to your cart   ",
                status: 'success',
                position:"top",
                duration: 5000,
                isClosable: true,
              })
              navigate('/cart')
        })
    }


    return (
        <Box>
            <Box display={'grid'} gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr)" }} gap='2' w={{ base: "97%", md: "95%", lg: "90%" }} margin={'auto'}>
                <Box display={'flex'} w='95%'   >
                    <Box w={{ base: "15%", md: "15%", lg: "15%" }} >
                        <Box p='10px 10px' boxShadow={'md'} borderRadius={"10px"}>
                            <Image onClick={() => handleUrl(data[0]?.product_item__primary_image)} src={data[0]?.product_item__primary_image} />
                        </Box>
                        <Box p='10px 10px' boxShadow={'md'} borderRadius={'10px'}>
                            <Image onClick={() => handleUrl(data[0]?.product_item__secondary_image)} src={data[0]?.product_item__secondary_image} />
                        </Box>


                    </Box>
                    <Box bg="blackAlpha.200" borderRadius={'15px'} display={'flex'} justifyContent={'center '} alignItems={'center'} ml='30px'  >
                        <Box>
                            {
                                url == "" ? <Image w={{ base: "100%", md: "350px", lg: "500px" }} h={{ base: "100%", md: "350px", lg: "500px" }} src={data[0]?.product_item__primary_image} />
                                    : <Image w={{ base: "100%", md: "350px", lg: "500px" }} h={{ base: "100%", md: "350px", lg: "500px" }} src={url} />
                            }
                        </Box>

                    </Box>

                </Box>
                <Box w={{ base: "90%", md: "100%", lg: "100%" }} m='auto' >
                    <Box>
                        <Box gap='1' display={'flex'}  >
                            {/* bg={'#F7FAFC'}  */}
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} color={'green'}>
                                <FiStar />
                            </Box>
                            <Box fontSize={'15px'} >
                                {data[0]?.rating__stars} | {data[0]?.rating__caption}
                            </Box>
                            <Box display={'flex'} ml='-20px' justifyContent={'center'} alignItems={'center'} >
                                <Image w='25%' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mask_group-10.png?v=1677571152' />
                            </Box>
                        </Box>
                        <Heading mt='10px' mb='10px'>{data[0]?.product_item_meta__title}</Heading>
                        <Text>{data[0]?.feature} {data[0]?.feature2} {data[0]?.feature3} {data[0]?.priority}</Text>
                        <Box mt='10px' mb='10px' display={'flex'} gap='3'>
                            <Text fontWeight={'bold'} fontSize={'xl'}> ₹{data[0]?.price}.00</Text>
                            <Text textDecoration={"line-through"}> ₹{data[0]?.price2}.00</Text>
                            <Text fontWeight={'bold'} color={'#00C68C'}>{Math.round(discount / data[0]?.price2 * 100)}{" % OFF"}</Text>
                        </Box>
                        <Box p='10px 0px ' >
                            <Heading fontSize={'md'} >Choose Your Color :</Heading>
                            <Box p={'10px'} display={'flex'} gap='2'>
                                {
                                    color.map((el) => {
                                        return <Box bg={el.c} borderRadius={'50%'} border={'1px solid black'} h='30px' w='30px'></Box>
                                    })
                                }
                            </Box>

                            <Box mt='15px' mb='10px' display={'flex'} w={{ base: "100%", md: "80%", lg: "60%" }} borderRadius={'10px'} justifyContent={'center'} alignItems={'center'}>
                                <Box w='70%' p='10px' borderRadius={'10px 0px 0px 10px'} bg='orange.50'>
                                    <Text fontWeight={'bold'}>₹15 off on All UPI Payments</Text>
                                </Box>
                                <Box w='30%' p='10px' borderRadius={'0px 10px 10px 0px'} bg='orange.100' gap='2' display={'flex'}>
                                    <Image src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/paytm_icon_fa75a315-11a2-4c8e-a241-18af809eb683.svg?v=1682575951' />
                                    <Image src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gpay_icon_503ebbda-a3e1-4659-af32-0686aecec227.svg?v=1682575951' />
                                    <Image src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/phone_pe_icon_f9872d32-f8cf-43ca-8fa2-78db125fcdad.svg?v=1682575951' />
                                </Box>
                            </Box>


                            <Box mt='10px' mb='10px' display={'flex'} w={{ base: "100%", md: "80%", lg: "60%" }} bg='blue.100' borderRadius={'10px'} justifyContent={'center'} alignItems={'center'}>
                                <Box w='70%' p='4px 10px' borderRadius={'10px 0px 0px 10px'} bg='blue.50'>
                                    <Text fontWeight={'bold'}>Flat 5% cashback upto ₹75 on orders above ₹1499</Text>
                                </Box>
                                <Box w='30%' p='4px 10px' borderRadius={'0px 10px 10px 0px'} gap='2' display={'flex'}>
                                    <Image src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/mobikwik_08db2909-7f20-403a-a417-fd4ea2cdecaf.png?v=1689752783' />

                                </Box>
                            </Box>

                            <Text fontWeight={'bold'} fontSize={'15px'}>Active Offers</Text>
                            <Box mt='10px ' mb='10px' borderRadius={'10px'} border={'1px dashed black'} p='20px 10px' bg='blue.50' display={'flex'} justifyContent={'space-between'} gap={'5'} w={{ base: "100%", md: "80%", lg: "60%" }}>
                                <Box w='50%'  >
                                    <Text fontWeight={'semibold'} fontSize={'20px'} >Corporate Deal</Text>
                                </Box>
                                <Box w='50%' display={'flex'}>
                                    <Text fontWeight={'bold'} color={'blue'} >Click To Enquire</Text>

                                </Box>
                            </Box>
                            <Button onClick={() => handleCart(data[0]?._id)} _hover={{ bg: "black" }} bg='black' color='white' mt='5px' borderRadius={'20px'} w={{ base: "100%", md: "80%", lg: "60%" }}><BsHandbagFill /> <span style={{ marginLeft: '10px' }}>ADD TO CART</span></Button>
                        </Box>
                    </Box>

                </Box>

            </Box>
            <Box mt='30px'>
                <ProductPageFooter data={data[0]?.product_item_meta__title} />
            </Box>

        </Box>

    )
}
