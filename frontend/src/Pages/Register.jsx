'use client'

import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    Box,
    Spinner,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { UserRegister } from '../redux/Authreducer/action'

export default function Register() {

    const [name, setname] = useState("")
const [email, setemail] = useState("")
const [mobile, setmobile] = useState("")
const [password, setpassword] = useState("")
const [isAdmin, setAdmin] = useState(false)
const dispatch=useDispatch()
const navigate=useNavigate()
const [loading,setLoading]=useState(false)
// console.log(password)
// console.log(UserRegister())
const handleRegister=async()=>{
    if(name==""||email==""||password==""||mobile==""){
alert("Fill All the fields")
    }else{
        dispatch(UserRegister({name,email,password,isAdmin,mobile})).then((res)=>{
            console.log(res)
               navigate('/login')
            })
            setLoading(true)
    }
     
}




    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex flex={1}>
                <Image
                  
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://www.boat-lifestyle.com/cdn/shop/products/WaveLite_GIFCarousal_003_1080x.jpg?v=1685530794'
                    }
                />
            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Register to enjoy our Services</Heading>
                    <FormControl >
                        <FormLabel>Name</FormLabel>
                        <Input placeholder='Enter Name' onChange={(e)=>setname(e.target.value)} type="text" />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" placeholder='Enter Email' 
                        onChange={(e)=>setemail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl >
                        <FormLabel>Mobile</FormLabel>
                        <Input type="number"
                        placeholder='Enter Mobile'
                        onChange={(e)=>setmobile(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" 
                        placeholder='Enter Your Password'
                        onChange={(e)=>setpassword(e.target.value)}
                        />
                    </FormControl>
                    <Box>
                        <Checkbox onChange={(e)=>setAdmin(e.target.checked)} size='md' colorScheme='red'>
                            Admin
                        </Checkbox>
                    </Box>

                    <Stack spacing={6}>
                    <Text textAlign={'left'}>Already Registered ? <Link to='/login'><span style={{color:'Blue'}}>Login here</span> </Link></Text>
                        <Button onClick={handleRegister} color={'white'} bg={'blue'} _hover={{backgroundColor:"blue"}} variant={'solid'}>
                         Register
                        </Button>
                        {
                            loading ? 
                            <Button disabled onClick={handleRegister} color={'white'} bg={'blue'} _hover={{backgroundColor:"blue"}} variant={'solid'}>
                            <Spinner size={'md'}/> 
                           </Button>
                           :
                           <Button onClick={handleRegister} color={'white'} bg={'blue'} _hover={{backgroundColor:"blue"}} variant={'solid'}>
                         Register
                        </Button>
                        }

                    </Stack>
                </Stack>
            </Flex>

        </Stack>
    )
}