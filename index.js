const express = require('express');
const auth_router = require('./auth/auth_route');
const app = express();

app.use('/auth/user', auth_router);

app.get('/', (req, res) => {
    res.send('Welcome to JWT-NODE-REST Sample.');
});

app.listen(3000, () => console.log('Server started at port: 3000'))