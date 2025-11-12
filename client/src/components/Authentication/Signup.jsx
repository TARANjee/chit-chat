import { Box, Button, Field, Input, InputGroup, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
const [show, setshow] = useState(false)

const handleClick=()=>setshow(!show)

const postDetails=(pics)=>{
  setPic(pics);
}

const submitHandler=()=>{
  
} 

  return (
    <VStack spacing="5px">
     <Field.Root>
      <Field.Label>Name</Field.Label>
      <Input 
      placeholder="Enter your Name" 
      onChange={(e)=>setName(e.target.value)}
       />
    </Field.Root>

    <Field.Root>
      <Field.Label>Email</Field.Label>
      <Input 
      placeholder="Enter your Email" 
      type='email'
      onChange={(e)=>setEmail(e.target.value)}
       />
    </Field.Root>
    <Field.Root>
      <Field.Label>Password</Field.Label>
       <InputGroup endElement={<Button background='none' color='black' h="1.75rem" size="sm" onClick={handleClick}>{show?'Hide':'Show'}</Button>}>
      <Input 
      placeholder="Enter your Password" 
      type={show?'text':'password'}
      onChange={(e)=>setPassword(e.target.value)}
       />
       </InputGroup>
    </Field.Root>
    <Field.Root>
      <Field.Label>Confirm Password</Field.Label>
       <InputGroup endElement={<Button background='none' color='black' h="1.75rem" size="sm" onClick={handleClick}>{show?'Hide':'Show'}</Button>}>
      <Input 
      placeholder="Enter your Confirm Password" 
      type={show?'text':'password'}
      onChange={(e)=>setPassword(e.target.value)}
       />
       </InputGroup>
    </Field.Root>
    <Field.Root>
      <Field.Label>Upload your Picture</Field.Label>
      <Input 
      placeholder="Enter your Pic"
      type='file'
      p={1.5}
      accept='image/*' 
      onChange={(e)=>postDetails(e.target.files[0])}
       />
    </Field.Root>

    <Button
    colorPalette={'blue'}
    width='100%'
    style={{marginTop:15}}
    >
      Sign Up
    </Button> 

    </VStack>
  )
}
