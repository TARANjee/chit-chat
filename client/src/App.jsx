import { Button } from '@chakra-ui/react'
import './App.css'
import { Route } from 'react-router-dom'
import ChatPage from './pages/ChatPage'
import HomePage from './pages/HomePage'

function App() {
  
  return (
    <div className="App">
    <Route exact path='/' component={HomePage} />
    <Route path='/chats' component={ChatPage} />
    </div>
  )
}

export default App
