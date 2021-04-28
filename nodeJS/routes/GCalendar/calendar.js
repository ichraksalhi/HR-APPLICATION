const router = require('express').Router();
//const passport = require('passport');
//var { CalendarModel } = require('../GCalendar');
let CalendarModel = require('../../models/calendar');
const { uploadTwo } = require('./utils/Uploader');
const path = require('path');
const cleaner = require('./utils/fileCleaner');
const { allowedImages, allowedFiles } = require('./enums/fileExtentions');

/* GET Calendar . 
@Route : calendar/
*/
//tekhdm
router.get('/', (req, res) => {
  CalendarModel.findOne()
    .populate('user')
    .then(data => {
      res.json(data);
    });
});

/* ADD Calendar . 
@Route : calendar/add
*/
//tekhdm
router.post('/add', (req, res) => {
  uploadTwo(req, res, function(err) {
    let pdf1 = '';
    let pdf2 = '';
   // if (req.files.length > 0) {
    //  pdf1 = req.files[0].path;
     // pdf2 = req.files[1].path;
 //  }
    newCalendar = new CalendarModel({
      fileOne: pdf1,
      fileTwo: pdf2,
     // user: req.user._id
    });
    newCalendar
      .save()
      .then(cal => res.json(cal))
      .catch(err => res.status(400).json(err));
  });
});
/* UPDATE or ADD calendar. 
@Route : calendar/update
*/
router.put('/update', (req, res) => {
  uploadTwo(req, res, function(err) {
    let pdf1 = '';
    let pdf2 = '';
   // console.log(req.files.length);
   // if (req.files.length > 0) {
      //pdf1 = req.files[0].path;
     // pdf2 = req.files[1].path;
    
   // }

    //Delete old files
    CalendarModel.findOne()
    
        {
          if (pdf1 !== '') cleaner(old.fileOne);
          if (pdf2 != '') cleaner(old.fileTwo);
  
          let eventUpdated = {
            fileOne: pdf1,
            fileTwo: pdf2,
           // user: req.user._id
          };
  
          CalendarModel.findOneAndUpdate(
            {},
            {
              $set: eventUpdated
            },
            { new: true }
          )
            .then(event => res.json(event))
            .catch(err => res.status(400).json(err));
        }
      
      })
      .catch(err => {
       
      });
  });


module.exports = router;
