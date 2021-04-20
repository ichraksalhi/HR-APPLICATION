const router = require('express').Router();
const User = require('../../models/User')

router.route('/').get((req, res) => {
    User.find()
    .then(User => res.json(User))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(User => res.json(User))
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;


