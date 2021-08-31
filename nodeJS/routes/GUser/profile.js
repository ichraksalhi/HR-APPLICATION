
const express = require('express');
var app=express()

app.use(express.json());
const router = express.Router();
//const { default: Profile } = require('frontOffice/views/Profile');
const auth = require('../../middleware/auth');
const User = require('../../models/User');

//@route Get api/profile/me
//@desc Get current users profile
//@access Private
// router.get('/me',auth,async (req,res)=>{
// try{
// const profile = await User.findOne({user: req.body.id}) //populate('user',['firstname','lastname','email','avatar'])
// if(!profile){
//     return res.status(400).json({msg:'There is no profile for this user'});
// }
// res.json(profile);
// }catch(err){
//  console.error(err.message);
//  res.status(500).send('Server Error');
// }
// });



// router.get("/",(req,res)=>{
//     User.find()
//   .then(p => res.json(p))
//   .catch(err => res.status(400).json('Error: ' + err));
// });

//@route Get api/profile/id
//@desc GET deatails job candidate
//@access Private
  router.route('/getuser',auth).post((req, res) => {
    console.log(req.body);
    const {UserId} = req.body;
    console.log(UserId);
   User.findById(UserId)
      .then(e => res.json(e))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update',auth).put((req, res) => {
    const {Us,firstname,lastname,email,company} = req.body;
    console.log(Us);
    User.findOneAndUpdate({ Us: req.body.Us },{ firstname,lastname,email,company },(err, result) => {
      console.log(Us);  
      console.log(firstname);
      console.log(lastname);
      console.log(email);
      if (err) {
          return res.status(500).send({ msg: "Internal server error!" });
        } else {

          return res.send({ msg: "Success in updating question!" });
        }
      }
    );
      //   m.save()
      //     .then(() => res.json('Profile updated!'))
      //     .catch(err => res.status(400).json('Error: ' + err));
      // })
      // .catch(err => res.status(400).json('Error: ' + err));
  });

//   router.route('/:id').delete((req, res) => {
//     User.findByIdAndDelete(req.params.id)
//       .then(() => res.json('Post deleted.'))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

module.exports = router;