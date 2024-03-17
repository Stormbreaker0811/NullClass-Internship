const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// DB Config
const db = mongoose.connect("mongodb://localhost:27017/")
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
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({
        username: username,
        password: password
    });
    console.log("Username: "+username+" Password: "+password);
})


app.get('/',(req,res) => {
    res.send("This is the default function in RESTAPI.");
})

app.listen(PORT,() => {
    console.log("Server Running on port:"+PORT);
})