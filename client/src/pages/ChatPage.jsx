import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
export default function ChatPage() {
  const [chats, setChats] = useState([])

  const fetchChats = async () => {
   try{
      const {data} = await axios.get('/api/chat');
     setChats(data);
  }  
  catch(err){
      console.log(err);
  }
  }

  useEffect(() => {
    fetchChats();
  }, [])
  

  return (
    <div>
      <h1>ChatPage</h1>

      {
        chats.map((chat) => (
          <div key={chat._id}>{chat.chatName}</div>
        ))
      }
    </div>
  )
}
