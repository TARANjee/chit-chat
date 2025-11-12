import { Button, Field, Input, InputGroup, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const [show, setshow] = useState(false)
  
  const handleClick=()=>setshow(!show)
  
  
  const submitHandler=()=>{
    
  } 
  
    return (
      <VStack spacing="5px">

  
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
     
      <Button
      colorPalette={'blue'}
      width='100%'
      style={{marginTop:15}}
      >
        Login
      </Button> 
      <Button
      colorPalette={'red'}
      width='100%'
      >
        Get Guest user Credential
      </Button> 
  
      </VStack>
    )
  }
  
