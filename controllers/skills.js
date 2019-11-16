const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    edit,
    update,
    delete: deleteSkill,
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
};
function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id)+1,
    });
};
function newSkill(req, res) {
    res.render('skills/new');
};
function create(req, res) {
    // req.body.exp = false;
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
};
function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        skill,
        idx: req.params.id,
    });
};
function update(req, res) {
    // req.body.exp = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
};
function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}