const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const auth_router = require('./auth/auth_route');
const app = express();

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, err => {
    if(err){
        console.log(err);
    }else {
        console.log('MongoDB connection successful');
    }
})
app.use('/auth/user', auth_router);

app.get('/', (req, res) => {
    res.send('Welcome to JWT-NODE-REST Sample.');
});

app.listen(3000, () => console.log('Server started at port: 3000'))