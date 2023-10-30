const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



const allChannels = async (req, res, next) => {
   try {
       const channels = await prisma.channel.findMany()
       res.status(200).json(channels);
   } catch (err) {
        res.status(500).json(err)
   }
}


const channelById = async (req, res, next) => {
    try {
        const room = await prisma.channel.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(200).json(room)
    }
    catch (err) {
        res.status(500).json(err)
    }
}


const createChannel = async (req, res, next) => {
    try {
        const{name,description} = req.body
        const createdRoom = await prisma.channel.create({
            data: {
                name: name,
                description: description
            }
        })
        res.status(201).json(createdRoom)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {allChannels,channelById,createChannel}
