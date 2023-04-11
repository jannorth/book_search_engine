const db = require('../config/connection');
const { Book, User } = require('../models/index');

const userData = require('./userData.json');

db.once('open', async () => {
  await User.deleteMany({});

//   rename book variable to pattern
  const books = await User.insertMany(userData);

  console.log('Data seeded!');
  process.exit(0);
});
