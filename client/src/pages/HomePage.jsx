import { Box, Container, Tabs, Text } from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'

export default function HomePage() {
  return (
    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        justifyItems='center'
        p={3}
        bg='white'
        w='100%'
        m='40px 0 15px 0'
        borderRadius='lg'
        borderWidth='1px'
        
        >
        <Text fontSize="4xl" fontFamily="Work Sans" color="black">Chit-Chat</Text>
      </Box>

      <Box bg='white' w='100%' p={4} borderRadius='lg' borderWidth='1px'>
       
       <Tabs.Root colorPalette={'blue'} variant="line" fitted defaultValue={"Login"}>
      <Tabs.List>
        <Tabs.Trigger value="Login">Login</Tabs.Trigger>
        <Tabs.Trigger value="Sign Up">Sign Up</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="Login">
        <Login />
      </Tabs.Content>
        <Tabs.Content value="Sign Up">
        <Signup />
        </Tabs.Content>
    </Tabs.Root>
       
       </Box>

    </Container>
  )
}
