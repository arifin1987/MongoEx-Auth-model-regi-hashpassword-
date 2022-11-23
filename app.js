const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouter');
const userRouter = require('./routers/userRouter');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/my-student-2')
.then(()=>{
    console.log('mongodb connected successfully')
})
.catch(err=> console.log('connection failed'));
app.use(express.json());

app.use('/api/students', studentRouter);
app.use('/api/user', userRouter);


const port = 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});