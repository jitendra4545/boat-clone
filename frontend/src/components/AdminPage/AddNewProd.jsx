import { Box, Button, FormControl, FormLabel, Heading, Input, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AdminNav } from './AdminNav'
import { AdminSidebar } from './AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { AddData, EditData, GetSingleData } from '../../redux/AppReducer/action'
import { useNavigate, useParams } from 'react-router-dom'

export const AddNewProd = () => {

    const { isLoading, isError, product } = useSelector((store) => store.AppReducer)
    // const [singleprod, setSingleprod] = useState("")
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


    const params = useParams()
    const { id } = params

    console.log(id)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAdd = () => {
        if (category == "" ||
            price == "" || price2 == "" || product_item__primary_image == "" || product_item_meta__title == "" || priority == "" || feature == "") {
            alert("Fill all the Fields")
        } else {
            const payload = {
                category,
                price, price2, product_item__primary_image, product_item__secondary_image,
                product_item_meta__title, priority, priority2, priority3,
                feature, feature2, feature3
            }
            dispatch(AddData(payload)).then(() => {
                navigate('/admin/allproduct')
            })
        }
    }

    useEffect(() => {
        if (id) {
            let singleprod = product.find(el => el._id === id)
            setproduct_item_meta__title(singleprod?.product_item_meta__title)
            setproduct_item__primary_image(singleprod?.product_item__primary_image)
            setproduct_item__secondary_image(singleprod?.product_item__secondary_image)
            setprice(singleprod?.price)
            setprice2(singleprod?.price2)
            setfeature(singleprod?.feature)
            setfeature2(singleprod?.feature2)
            setfeature3(singleprod?.feature3)
            setpriority(singleprod?.priority)
            setpriority2(singleprod?.priority2)
            setpriority3(singleprod?.priority3)
            setcategory(singleprod?.category)
        }
    }, [])



const handleEdit = () => {
        dispatch(EditData({id, category,price, price2, product_item__primary_image, product_item__secondary_image,product_item_meta__title, priority, priority2, priority3,feature, feature2, feature3})).then(() => {
            navigate("/admin/allproduct")
        })
    }



    return (
        <Box>
            <AdminNav />
            <Box h='90vh' display={'grid'} gap='5' gridTemplateColumns={'230px auto'}>
                <AdminSidebar />
                <Box border={'1px solid blue'} >
                    <Box color={'white'} bg='blue.900' paddingTop={'20px'} paddingBottom={'20px'} >
                        {!id ? <Heading textAlign={'center'} fontSize={'20px'}>ADD NEW PRODUCTS</Heading> : <Heading textAlign={'center'} fontSize={'20px'}>EDIT PRODUCT</Heading>}
                    </Box>

                    <Box  h='80vh' p='30px'>
                        <Box display={'grid'} gap='6' gridTemplateColumns={"repeat(3,1fr)"}  >
                            <FormControl isRequired>
                                <FormLabel>Category</FormLabel>
                                {id ? <Select disabled onChange={(e) => setcategory(e.target.value)}>
                                    <option value="">Select Category</option>
                                    <option value="bluetoothHeadphone">BluetoothHeadphone</option>
                                    <option value="watch">Smart Watch</option>
                                    <option value="earbud">EarBud</option>
                                    <option value="speaker">Speaker</option>
                                    <option value="headphone">HeadPhone</option>
                                </Select> :
                                    <Select onChange={(e) => setcategory(e.target.value)}>
                                        <option value="">Select Category</option>
                                        <option value="bluetoothHeadphone">BluetoothHeadphone</option>
                                        <option value="watch">Smart Watch</option>
                                        <option value="earbud">EarBud</option>
                                        <option value="speaker">Speaker</option>
                                        <option value="headphone">HeadPhone</option>
                                    </Select>

                                }
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Title</FormLabel>
                                <Input value={product_item_meta__title} onChange={(e) => setproduct_item_meta__title(e.target.value)} placeholder='Enter Title' />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Product Image</FormLabel>
                                <Input value={product_item__primary_image} onChange={(e) => setproduct_item__primary_image(e.target.value)} placeholder='Enter Url' type='url' />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Product Secondary Image</FormLabel>
                                <Input value={product_item__secondary_image} onChange={(e) => setproduct_item__secondary_image(e.target.value)} placeholder='Enter Url' type='url' />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Original Price</FormLabel>
                                <Input value={price} placeholder='Enter Price' onChange={(e) => setprice(e.target.value)} type='number' />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Discounted Price</FormLabel>
                                <Input value={price2} onChange={(e) => setprice2(e.target.value)} placeholder='Enter Price' type='number' />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Feature</FormLabel>
                                <Input value={feature} onChange={(e) => setfeature(e.target.value)} placeholder='Add Feature' />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Feature 2</FormLabel>
                                <Input value={feature2} onChange={(e) => setfeature2(e.target.value)} placeholder='Add Feature' />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Feature 3</FormLabel>
                                <Input value={feature3} onChange={(e) => setfeature3(e.target.value)} placeholder='Add Feature' />
                            </FormControl>

                            <FormControl is isRequired>
                                <FormLabel>Priority</FormLabel>
                                <Input value={priority} onChange={(e) => setpriority(e.target.value)} placeholder='Add Priority' />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Priority 2</FormLabel>
                                <Input value={priority2} onChange={(e) => setpriority2(e.target.value)} placeholder='Add Priority' />
                            </FormControl>

                            <FormControl >
                                <FormLabel>Priority 3</FormLabel>
                                <Input value={priority3} onChange={(e) => setpriority3(e.target.value)} placeholder='Add Priority' />
                            </FormControl>


                        </Box>

                        <Box mt='30px' textAlign={'center'}>
                            {id ? <Button onClick={handleEdit} color={'white'} bg='blue.900'>Edit Product</Button> : <Button onClick={handleAdd} color={'white'} bg='blue.900'>Add Product</Button>}
                        </Box>

                    </Box>

                </Box>
            </Box>
        </Box>
    )
}
