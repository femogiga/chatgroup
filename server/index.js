const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const userRoute = require('./route/userRoutes');
const chatRoute = require('./route/chatRoutes');
const channelRoute = require('./route/channelRoutes');
const userOnChannelRoute = require('./route/userOnChannelRoutes');

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use('/users', userRoute);
app.use('/chats', chatRoute);
app.use('/channels', channelRoute);
app.use('/subscribe', userOnChannelRoute);
app.get('/', (req, res) => {
  res.send('Welcome to my application');
});
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('listening on port ' + port);
});
