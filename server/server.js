import express from 'express'
import {chats} from './data/data.js'
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Hello from server');
});

app.get('/api/chat', (req, res) => {
    res.send(chats)
})
app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});