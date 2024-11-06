const express = require("express");
const app = express();
const bodyParser = require ("body-parser");
app.use(bodyParser.json());

const handleReq = (req,res,next) => {
    console.log('middleware1');
    next();
};

app.use((req,res,next) =>{
    console.log('midlleware2')
   next();
});

app.use((req,res,next) => {
    console.log('middleware2');
    next();
})
app.get('/user',(req,res) =>{
   
    res.status(200);
})
app.listen(8000 , ()=> {
console.log('server running on http://localhost:8000')
}) 