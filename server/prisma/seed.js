const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    const user = await prisma.user.create({
      data: {
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123',
        chats: {
          create: {
            content: 'Sample chat content',
            authorId: 1, // Replace with the appropriate author ID
            room: {
              create: {
                name: 'Sample Room',
                description: 'This is a sample room description.',
              },
            },
          },
        },
        channels: {
          create: {
            name: 'Sample Channel',
            description: 'This is a sample channel description.',
            chat: {
              create: {
                content: 'Sample channel chat content',
                author: {
                  connect: { id: 1 }, // Replace with the appropriate author ID
                },
              },
            },
            users: {
              create: {
                userId: 1, // Replace with the appropriate user ID
                assignedAt: new Date(),
              },
            },
          },
        },
      },
    });

    console.log('User created:', user);
  } catch (error) {
    console.error('Error: ', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
