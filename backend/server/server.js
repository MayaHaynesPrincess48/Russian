const path = require('path')
const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')
const db = require('./config/db')
const port = process.env.PORT || 5000;

const publicationRoutes = require("./routes/publicationRoutes");
const userInfoRoutes = require("./routes/userInfoRouters");
const reviewRoutes = require("./routes/reviewRoutes");
const eventRoutes = require("./routes/eventRoutes");
const emailRoutes = require("./routes/emailRoutes")
const bodyParser = require('body-parser')

const cors = require('cors')
const cookieParser = require('cookie-parser')

const CURRENT_WORKING_DIR = process.cwd()
const app = express();

mongoose
   .connect(db.mongoURI, db.options)
   .then(() => {
      console.log('connected to MongoDB');
   })
   .catch((error) => {
      console.error('error connecting to MongoDB', error)
   })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, '/build')))
app.use('/uploads', express.static(path.join(CURRENT_WORKING_DIR, '/server/uploads')))

app.use("/api/publications", publicationRoutes);
app.use("/api/userInfo", userInfoRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/sendEmail", emailRoutes);

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '/build/index.html'))
})

app.listen(port, () => {
   console.log(`server is running on port`, port);
})