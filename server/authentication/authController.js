const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const register = async (req, res) => {
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstname, lastname, email, password, imgUrl } = req.body;
    const userExist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExist) {
      return res.status(400).json({ errors: 'user already exist.' });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const person = await prisma.user.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassword,
        imgUrl: imgUrl,
      },
    });
    return res
      .status(200)
      .json({ person: person, message: 'person successfully created' });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: err.message, error: 'internal server error' });
  }
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(401).json({ errors: 'Invalid credentials' });
    }
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ errors: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    console.log(token);
    const { id, firstname, lastname, imgUrl } = user;
    const dataToSend = { id, firstname, lastname, email, imgUrl };
    return res.json({ token, user: dataToSend });
  } catch (err) {
    return res.status(500).json({ errors: 'Internal server error' });
  }
};

module.exports = { login, register };
