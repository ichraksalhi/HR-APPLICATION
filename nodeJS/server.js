const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
//middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

//GJOB
app.use('/api/auth', require('./routes/GUser/auth'));
app.use('/api/register', require('./routes/GUser/register'));
app.use('/api/Job', require('./routes/GJob/Job'));
app.use('/api/JobHR', require('./routes/GJob/HR'));
app.use('/api/JobAdmin', require('./routes/GJob/Admin'));

//GReclamation  chouchou
const reclamationRouter = require('./routes/GReclamation/reclamation');
const userRouter = require('./routes/GUser/user');
const calendarRouter = require('./routes/GCalendar/calendar');

app.use('/reclamation', reclamationRouter);
app.use( '/user' ,userRouter);
app.use('/calendar', calendarRouter);

//
app.use('/personalityTest',require('./routes/GPersonalityTest/personality'));



const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});