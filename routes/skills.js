const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
// list skills
router.get('/', skillsCtrl.index);
// view page to add new skill
router.get('/new', skillsCtrl.new);
// show selected skill
router.get('/:id', skillsCtrl.show);
// edit selected skill
router.get('/:id/edit', skillsCtrl.edit);
// create new skill and add to db
router.post('/', skillsCtrl.create);
// update selected skill
router.put('/:id', skillsCtrl.update);
// delete selected skill
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
