const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://oxdiablo:Pollos_Hermanos505@cluster0.dtq5smd.mongodb.net/')
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Database error:', error);
});

db.once("open", () => {
  console.log("Database Connected")
});