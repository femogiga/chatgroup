const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addUserToChannel = async (req, res, next) => {
  try {
    const { userId, channelId } = req.body;
    const result = await prisma.usersOnChannels.create({
      data: {
        userId: parseInt(userId),
        channelId: parseInt(channelId),
      },
    });
    res.status(201).json({ result, message: 'user added successfully' });
  } catch (error) {
    res.status(200).json(error);
  }
};

const getUsersInChannel = async (req, res, next) => {
  try {
    const  channelId  = req.params.id;
    const usersInChannel = await prisma.usersOnChannels.findMany({
      where: {
        channelId: parseInt(channelId),
      },
      include: {
        user: true,
      },
    });

    console.log('Users in Channel:', usersInChannel);
    res.status(200).json(usersInChannel);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { addUserToChannel, getUsersInChannel };
