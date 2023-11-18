const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt')

const prisma = new PrismaClient();

const allUsers = async (req, res, next) => {
  const result = await prisma.user.findMany();
  res.status(200).json(result);
};

const findById = async (req, res, next) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

const createUser = async (req, res, next) => {
  const { firstname, lastname, email, password, imgUrl } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        imgUrl: imgUrl,
      },
    });
    res.status(201).json({ newUser, message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const updateUser = async (req, res, next) => {
  const { firstname, lastname, email, password, imgUrl } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassword,
        imgUrl: imgUrl,
      },
    });
    console.log(updatedUser);
    res
      .status(200)
      .json({ updatedUser, message: 'User upadated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const getUserAndUsersGroup = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        channels: true,
      },
    });
    let combinedData = [];
    const allChannel = await prisma.channel.findMany({});
    const userChannel = user?.channels;
    let groups = [];
    userChannel.forEach((item) => {
      allChannel.forEach((channel) => {
        if (item.channelId === channel.id) {
          combinedData = [...combinedData, { name: channel?.name }];
        }
      });
    });

    console.log(combinedData);
    res.status(200).json({ combinedData });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

// module.exports = { allUsers, findById, createUser };
module.exports = {
  allUsers,
  findById,
  createUser,
  getUserAndUsersGroup,
  updateUser,
};
