const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://oxdiablo20:Pollos_Hermanos505@cluster0.dtq5smd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
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

//CRUD 

//CREATE READ UPDATE DELETE 
/*
Steps to perform CRUD OPERATIONS
1. Create a schema 
2. Create a model 
3. Perform the operation 
*/

//Create User schema

const userSchema = new mongoose.Schema({
    firstName: String ,
    lastName: String,
    age: Number,
    isMarried: Boolean,
})

//Step 2: Making the model 
const User = mongoose.model('user', userSchema);

//Create a new user 
const newUser = new User({
    firstName: "Clem",
    lastName: "Brighton",
    age: 53,
    isMarried : false, 
})