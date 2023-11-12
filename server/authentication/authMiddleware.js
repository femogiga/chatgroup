const jwt = require('jsonwebtoken');
const { Prisma, PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    console.log(res);
    return res.status(401).json({ error: 'No token , authorization denied' });
  }
  try {
    // Check if the token is in the correct format
    const tokenParts = token.split(' ');

    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ error: 'Invalid token format' });
    }
    const decoded = jwt.decode(tokenParts[1], process.env.SECRET_KEY);
    const id = parseInt(decoded.id);
    console.log('id======>', decoded);
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
