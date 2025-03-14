import express from 'express';
const app = express();
const port = 3000;

//app is listeing to port 3000
app.listen(port, (req, res)=>{
    console.log(`server is listening to port number ${port}`);
})

//app serves a static file as public 
app.use(express.static('public'))