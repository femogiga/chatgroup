const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const userRoute = require('./route/userRoutes');
const chatRoute = require('./route/chatRoutes');
const channelRoute = require('./route/channelRoutes');
const userOnChannelRoute = require('./route/userOnChannelRoutes');
const authMiddleware = require('./authentication/authMiddleware');
const authRoute = require('./authentication/authRoute');
const { postChat } = require('./controllers/chatController');

const app = express();
app.use(express.json());



app.use(morgan('common'));
app.use(cors());

// app.use('/users', authMiddleware, userRoute);
// app.use('/chats', authMiddleware, chatRoute);
// app.use('/channels', authMiddleware, channelRoute);
// app.use('/subscribe', authMiddleware, userOnChannelRoute);
// app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/chats', chatRoute);
app.use('/channels', channelRoute);
app.use('/subscriptions', userOnChannelRoute);
app.use('/auth', authRoute);

app.get('/', (req, res) => {
  res.send('Welcome to my application');
});
const port =  process.env.PORT || 8000;

app.listen(port, () => {
  console.log('listening on port ' + port);
});
