//Initialize Express Server
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const res = require("express/lib/response");

const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

const PORT = process.env.PORT || 5000;

//mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log('Server running on port(s):', PORT)))
//    .catch((error) => console.log(error.message));

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log("Connected to MongoDD");
    }
);

//Middleware and such test
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users" , userRoute);
app.use("/api/auth" , authRoute);
app.use("/api/posts" , postRoute);

app.listen(8800,()=>{
    console.log("Backend Server is Running!..")
})

