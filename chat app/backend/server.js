const express = require('express');
const dotenv = require('dotenv');
const authroute = require('./src/routes/auth.routes');
const messageroute = require('./src/routes/message.routes');
const connection = require('./src/config/db')

dotenv.config();
connection();
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/api/auth',authroute);
app.use('/api/message',messageroute);

const server = app.listen(PORT, () => {
    console.log(`app is listening at ${PORT} port`);
});

server.on('error', (error) => {
    console.error('Server failed to start:', error.message);
});
