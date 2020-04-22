const express = require('express');
const cors = require("cors")
const app =express();

app.use(express.json());
app.use(cors());

const subscribers = [];
app.get('/messages' , ( req , res )=> {
  subscribers.push(res);
  res.writeHead(200 ,{
      // to make browser to understand the text and parse it
      'Content-Type' : 'text/event-stream'
  })
})

app.post('/messages' ,( req , res )=>{
    const { body } = req;
    subscribers.forEach((s)  => s.write(`data: ${JSON.stringify(body)}\n\n`));
    res.status(204).end();

})


app.listen(3000 , () =>{
    console.log("your server is running on port 3000")
})