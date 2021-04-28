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
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,useFindAndModify: false  }
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

//skillstest 
app.use("/api/question", require("./routes/skillsroute/question"));
app.use("/api/test", require("./routes/skillsroute/test"));
app.use("/api/result", require("./routes/skillsroute/result"));
app.use("/api/profile", require("./routes/GUser/profile"));

////for the mail api najla 
const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport');

const {SENDGRID_API} = require('./config/keys');

const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{
        api_key:SENDGRID_API
    }
}))

app.post('/send', (req, res) => {
    const { name, email, message, subject } = req.body
    transporter.sendMail({
        to:email,
        from:'najladaoud2@gmail.com',
        subject:subject,
      // <h3>${name}</h3>
        html:`<p>${message}</p>`
    }).then(resp => {
        res.json({resp})
    })
    .catch(err => {
        console.log(err)
    })
})

////////////////////










const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});