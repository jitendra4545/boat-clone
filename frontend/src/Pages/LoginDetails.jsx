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
import { Link } from 'react-router-dom'

export default function LoginDetails() {
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
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <Text textAlign={'left'}>Don't Have Any Account ? <Link to='/register'><span style={{color:'Blue'}}>Register here</span> </Link></Text>
            <Button color={'white'} bg={'blue'} _hover={{backgroundColor:"blue"}}  variant={'solid'}>
              Sign in
            </Button>
            
          </Stack>
        </Stack>
      </Flex>
      
    </Stack>
  )
}