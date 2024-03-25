const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;
const db_uri = "mongodb://localhost:27017/twitter-clone";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// DB Config
const db = mongoose.connect(db_uri)
    .then(() => {
    console.log("Database connected")
}).catch(err => console.log(err))

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.post('/login', async (req,res) => {
    // Logic to login user will be here
    const formData = req.body;
    if(formData == null){
        console.log("No data received");
    }
    const result = await User.where('password').equals(formData.password);
    if(result.length > 1){
        return res.send(false);
    }else if(result.length === 0 || result === null || result === undefined){
        return res.send("No user found..//")
    }else{
        return res.send(true);
    }
})


app.post('/register',async (req,res) => {
    const formData = req.body;
    const user = new User({
        username: formData.username,
        password: formData.password
    });
    user.save()
      .then((data)=>{
          console.log(`New User added : ${data._id}`);
          res.sendStatus(200);
      })
      .catch((error)=>console.log(error));
});

app.get('/',(req,res) => {
    res.send("This is the default function in RESTAPI.");
})

app.listen(PORT,() => {
    console.log("Server Running on port:"+PORT);
})