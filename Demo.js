const express = require("express");
const app = express();
const bodyParser = require ("body-parser");
let users = [
  {
    id: 1,
    name: "Ibrahim",
    email: "ibi@gmail.com",
  },
  {
    id: 2,
    name: "shehbaz",
    email: "dfghjk@gmail.com",
  },
  {
    id: 3,
    name: "ahmed",
    email: "ahm@gmail.com",
  },
  {
    id: 4,
    name: "bilal",
    email: "bilal@gmail.com",
  },
];
app.use(bodyParser.json());
app.get('/user',(req, res ,next ) =>  {
    res.status(200).json({user: users})
})
app.listen(2000);


app.post('/users', (req,res,next)=>{
    const {id,name,email}=req.body;

    const requireUser={
        id : "",
        name : "",
        email : ""
    };
    users.push(requireUser);
    if(requireUser){
        res.status(200).json({message:'usercreated',data:requireUser});
    }
      else 
      {res.status(500).json({message:'usernotcreated succesfully'});

        }

    }


)
