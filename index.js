const express = require('express');
const cors = require("cors")
const app =express();

app.use(express.json());
app.use(cors());

const messages=[];
app.post('/messages' , (req ,res)=>{
   const { body } = req;
   messages.push(body);
   res.status(204).end()
})

app.get('/messages' , (req ,res)=>{
    res.json(messages)
 })
 //##########################################
 const susbscribers ={};
 app.post('/long' , (req ,res)=>{
    const { body } = req;
    //send to all
    Object.keys(susbscribers).forEach(id =>{
        susbscribers[id].json(body)
        delete susbscribers[id];

    })
    res.status(204).end()
 })
 
 app.get('/long' , (req ,res)=>{
     const id =Math.ceil(Math.random()*100000)
     susbscribers[id]=res;
  })

app.listen(3000 , () =>{
    console.log("your server is running on port 3000")
})