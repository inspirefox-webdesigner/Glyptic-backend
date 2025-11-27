const mongoose = require('mongoose');

// Test MongoDB connection
async function testConnection() {
  try {
    await mongoose.connect('mongodb://localhost:27017/glyptic', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(' MongoDB connection successful!');
    process.exit(0);
  } catch (error) {
    console.error(' MongoDB connection failed:', error.message);
    console.log('\nTroubleshooting steps:');
    console.log('1. Make sure MongoDB is installed');
    console.log('2. Start MongoDB service: net start MongoDB');
    console.log('3. Or install MongoDB Community Server from: https://www.mongodb.com/try/download/community');
    process.exit(1);
  }
}

testConnection();