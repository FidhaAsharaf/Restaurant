const bcrypt = require('bcrypt');

const password = 'admin123'; // Replace with the actual password you want to hash
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log('Hashed Password:', hash);
});