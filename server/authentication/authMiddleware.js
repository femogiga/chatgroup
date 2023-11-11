const jwt = require('jsonwebtoken');
const { Prisma, PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    console.log(res)
    return res.status(401).json({ error: 'No token , authorization denied' });
  }
  try {
    const decoded = jwt.decode(token, process.env.SECRET_KEY);
    const id = parseInt(decoded.id);
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return res.status(401).json({ error: 'Invalid user' });
    }
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = authMiddleware;
