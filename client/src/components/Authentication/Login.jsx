import { Button, Field, Input, InputGroup, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { toaster } from "../ui/toaster"

import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setshow] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleClick = () => setshow(!show)
  const history = useHistory();

  const submitHandler = async () => {
    setLoading(true);

    if (!email || !password) {
      toaster.warning({
        title: "Please fill all the fields",
        duration: 3000,
        position: "bottom"
      })
      setLoading(false);
      return;
    }

    try {
      const config = { headers: { "Content-type": "application/json" } };

      const userData = { email, password };

      const { data } = await axios.post("/api/user/login", userData, config);

      toaster.success({
        title: "Login successful",
        duration: 3000
      })

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");

    } catch (error) {
      toaster.error({
        title: "Error Occurred",
        description: error.response?.data?.message || error.message,
        duration: 3000
      })
      setLoading(false);
    }
  }

  return (
    <VStack spacing="5px">

      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input
          placeholder="Enter your Email"
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Password</Field.Label>
        <InputGroup endElement={<Button background='none' color='black' h="1.75rem" size="sm" onClick={handleClick}>{show ? 'Hide' : 'Show'}</Button>}>
          <Input
            placeholder="Enter your Password"
            value={password}
            type={show ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
      </Field.Root>

      <Button
        colorPalette={'blue'}
        width='100%'
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        colorPalette={'red'}
        width='100%'
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>

    </VStack>
  )
}

