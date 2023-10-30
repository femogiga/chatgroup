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

module.exports = { addUserToChannel };
