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
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { GetUser, UserLogin } from '../redux/Authreducer/action'

export default function LoginDetails() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const {token,user}=useSelector((store)=>store.AuthReducer)
  console.log(token,user)


  const dispatch=useDispatch()
const navigate=useNavigate()
  const handleLogin=async()=>{
      dispatch(UserLogin({email,password})).then(()=>{
       if(token){
        navigate("/")
      }else{
        alert('Token Not Found')
      }
         
       
      })
  }

useEffect(()=>{
 dispatch(GetUser())
},[])

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image
          // w='100%'
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
            <Button onClick={handleLogin} color={'white'} bg={'blue'} _hover={{ backgroundColor: "blue" }} variant={'solid'}>
              Sign in
            </Button>

          </Stack>
        </Stack>
      </Flex>

    </Stack>
  )
}