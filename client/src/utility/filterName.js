


export const filterName = (data, id) => {
    const answer = data.find(item => item.id === id)
    return answer.firstname + " " + answer.lastname
}


export const mapItem = async (chat, data) => {
  let newArr = [];
  await chat.forEach((item) => {
    data.forEach((user) => {
      if (item?.authorId === user?.id) {
        newArr.push({
          ...item,
          firstname: user?.firstname,
          lastname: user?.lastname,
        });
      }
    });
  });
  return newArr;
};

// const result = mapItem(chat, data);
// console.log(result);




const data = [
  {
    id: 1,
    firstname: 'Alice',
    lastname: 'John',
    email: 'alice@gmail.com',
    password: 'alice',

  },
  {
    id: 2,
    firstname: 'Ola',
    lastname: 'Atkins',
    email: 'Ola@mail.com',
    password: 'ola',
  },
  {
    id: 4,
    firstname: 'Bayo',
    lastname: 'kunle',
    email: 'bayo@gmail.com',
    password: 'bayokunle',
  },
  {
    id: 5,
    firstname: 'Tayo',
    lastname: 'Olu',
    email: 'tayo@gmail.com',
    password: '$2b$10$ZAqEdfogtQ./peTY6Gu3CuxTHeklbtIxfv03sfREFRVTRjSn9bEFy',
  },
];

const chat = [
  {
    id: 1,
    content: 'Hello ',
    authorId: 1,
    roomId: 1,
    createdAt: '2023-10-29T20:08:26.894Z',
  },
  {
    id: 2,
    content: 'Hi i am your backend manager',
    authorId: 2,
    roomId: 2,
    createdAt: '2023-10-30T19:23:18.745Z',
  },
  {
    id: 3,
    content: 'We are not making progress',
    authorId: 2,
    roomId: 2,
    createdAt: '2023-11-04T17:46:58.187Z',
  },
  {
    id: 4,
    content: 'How are things progressing',
    authorId: 1,
    roomId: 2,
    createdAt: '2023-11-04T17:46:58.187Z',
  },
  {
    id: 5,
    content: 'How are you',
    authorId: 2,
    roomId: 1,
    createdAt: '2023-11-04T17:46:58.187Z',
  },
  {
    id: 6,
    content: 'Hi',
    authorId: 1,
    roomId: 1,
    createdAt: '2023-11-04T17:46:58.187Z',
  },
  {
    id: 7,
    content: 'Can you help me center a div',
    authorId: 1,
    roomId: 1,
    createdAt: '2023-11-05T10:59:15.156Z',
  },
  {
    id: 8,
    content: 'Anyone knows where i can get cat good',
    authorId: 4,
    roomId: 3,
    createdAt: '2023-11-06T18:50:16.082Z',
  },
  {
    id: 9,
    content:
      'there is a place in london where you can get cat food in bulk at a cheap price',
    authorId: 5,
    roomId: 3,
    createdAt: '2023-11-06T18:50:16.082Z',
  },
  {
    id: 10,
    content: 'I don not need bulk . i just need enough to last for 2 weeks . ',
    authorId: 4,
    roomId: 3,
    createdAt: '2023-11-06T18:50:16.082Z',
  },
  {
    id: 11,
    content: 'try aldi',
    authorId: 5,
    roomId: 3,
    createdAt: '2023-11-06T18:50:16.082Z',
  },
];


console.log('newArray' ,mapItem(chat,data))
// console.log('Anser', filterName(data, 1));
