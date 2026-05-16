const mongoose = require('mongoose');

const connection = async () => {
  try {
    const connDB = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB Connected: ${connDB.connection.host}`);

  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connection;