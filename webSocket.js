const express = require('express');
const http = require('http')
const cors = require("cors")
const socket = require('socket.io')
const app =express();

app.use(express.json());
app.use(cors());

const server = http.createServer(app)
const io =require('socket.io')(server)
io.on('connection' ,(client) =>{
    console.log("new client")
    client.on(('message') , (data)=>{
        console.log(data)
        io.emit('new-message' , data)
    })
})   

server.listen(3000 , () =>{
    console.log("your server is running on port 3000")
})