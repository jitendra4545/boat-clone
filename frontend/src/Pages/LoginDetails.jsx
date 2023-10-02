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
  Spinner,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { GetUser, UserLogin } from '../redux/Authreducer/action'

export default function LoginDetails() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const {token,user,isLoading}=useSelector((store)=>store.AuthReducer)
  console.log(token,user)
const toast=useToast()

  const dispatch=useDispatch()
const navigate=useNavigate()
  const handleLogin=async()=>{
    if(password==""||email==""){
      toast({
        title: 'Please Fill All the Fields',
        description: " password and Email ",
        status: 'warning',
        duration: 5000,
        position:"top",
        isClosable: true,
    })
    }else{
      dispatch(UserLogin({email,password})).then(()=>{
        localStorage.setItem("email",(email))
         navigate("/")
      
       })
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
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input onChange={(e)=>setemail(e.target.value)} type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input onChange={(e)=>setpassword(e.target.value)} type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <Text textAlign={'left'}>Don't Have Any Account ? <Link to='/register'><span style={{ color: 'Blue' }}>Register here</span> </Link></Text>
           

            {isLoading ? 
              <Button disabled  onClick={handleLogin} color={'white'} bg={'grey'} _hover={{ backgroundColor: "grey" }} variant={'solid'}>
            <Spinner size={'md'}/> Please Wait .... 
               </Button>
               :
               <Button  onClick={handleLogin} color={'white'} bg={'blue'} _hover={{ backgroundColor: "blue" }} variant={'solid'}>
               Sign in   
                </Button>
          }

          </Stack>
        </Stack>
      </Flex>

    </Stack>
  )
}