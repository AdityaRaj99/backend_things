import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';
import mongoose from 'mongoose';

const dbURL = "mongodb+srv://acc1:acc1@cluster0.epli3.mongodb.net/randomTutorial?retryWrites=true&w=majority"

mongoose.connect(dbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((result)=>{
    console.log("Connected to the databse")
    app.listen(PORT,()=>{
        console.log("Server Started")
    })
}).catch((err)=>{
    console.log(err)
})


const app=express();
const PORT=8080;
app.use(bodyParser.json())

app.get("/" ,(req, res)=>{
    res.send("Welcome to the Users APIs")
});
app.use("/user", userRoutes)  //user routes to userRoutes

// app.listen(PORT,()=>{
//     console.log('Server is running');
// })
