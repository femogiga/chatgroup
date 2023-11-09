const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

let io;
// const setSocket = (socketIO) => {
//   io = socketIO;
// };

const allChat = async (req, res, next) => {
  try {
    const chats = await prisma.chat.findMany();
    res.status(200).json(chats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
};

const reformedChatData = async (req, res, next) => {
  try {
    const chatData = await prisma.chat.findMany();
    const userData = await prisma.user.findMany();
    let newArr = [];
    if (userData && chatData) {
      chatData.forEach((item) => {
        userData.forEach((user) => {
          if (item.authorId === user.id) {
            newArr.push({
              ...item,
              firstname: user.firstname,
              lastname: user.lastname,
            });
          }
        });
      });
    }
    console.log(newArr);
    res.status(200).json(newArr);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

const chatById = async (req, res, next) => {
  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(chat);
  } catch (err) {
    res.status(500).json(err);
  }
};

const postChat = async (req, res, next) => {
  try {
    const { content, authorId, roomId } = req.body;
    console.log('body===>', req.body);
    console.log('roomId===>', roomId);
    console.log('authorId===>', authorId);
    // Check if authorId and roomId are not null
    if (!authorId || !roomId) {
      return res
        .status(400)
        .json({ error: 'AuthorId and roomId cannot be null' });
    }

    const message = await prisma.chat.create({
      data: {
        content: content,
        // authorId: authorId,
        // roomId: roomId,
        author: {
          connect: { id: parseInt(authorId) },
        },
        room: {
          connect: { id: parseInt(roomId) },
        },
      },
    });

     res.status(201).json({ message: 'Post successfully created', message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { allChat, chatById, postChat, reformedChatData };
