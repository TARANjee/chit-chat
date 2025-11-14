import './App.css'
import { Route } from 'react-router-dom'
import ChatPage from './pages/ChatPage'
import HomePage from './pages/HomePage'
import { Toaster } from "./components/ui/toaster";
function App() {
  
  return (
    <div className="App">
      <Toaster />
    <Route exact path='/' component={HomePage} />
    <Route path='/chats' component={ChatPage} />
    </div>
  )
}

export default App
