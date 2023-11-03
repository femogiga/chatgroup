const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const allUsers = async (req, res, next) => {
  const result = await prisma.user.findMany();
  res.status(200).json(result);
};

const findById = async (req, res, next) => {
  const result = await prisma.user.findUnique({
    where: { id: req.params.id },
  });
  res.status(200).json(result);
};

const createUser = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      },
    });
    res.status(200).json({ newUser, message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// module.exports = { allUsers, findById, createUser };
module.exports = { allUsers, findById };
