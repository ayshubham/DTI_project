const express= require('express');
const e = require('express');
const serverless = require('serverless-http');

const app= express();
const router = express.Router();

const MONGO_URI = "mongodb+srv://sarvh:sness@cluster0.iepnw.mongodb.net/sellersdata?authSource=admin&replicaSet=atlas-6lfi6z-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

// const mongoose = require("mongoose");
// const connectDB = async () => {
//   await mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: true,
//     fineOneAndUpdate: true,
//   });
//   console.log('mongo db connected');
// };

// connectDB();

// const userDetails = new mongoose.Schema({
//     sellername:{
//       type:String,
//       required:true,
//     },
//     sellersemail:{
//       type:String,
//       required:true,
//     }
//   },
//   {
//     timestamps:true,
//   }
// );

// const user = new userDetails({sellername:'testuser',sellersemail:'email@gmail.com'});

// user.save();

const value = true;

router.get('/', (req,res) =>{
  res.send(value);
});

router.get('/formData', (req,res) =>{
  res.send(value);
});

app.use('/.netlify/functions/api',router)

module.exports=app;
module.exports.handler = serverless(app);