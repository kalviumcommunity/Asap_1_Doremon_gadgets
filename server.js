const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = process.env.PUBLIC_PORT;

// define the ping route
app.get("/", (req,res)=>{
  res.send('Hello, this is the default route page')
})
app.get("/ping",(req,res)=>{
  res.send('pong')
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
