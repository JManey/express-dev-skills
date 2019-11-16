

const skills = [
    {skill: 'JavaScript', exp: true},
    {skill: 'HTML', exp: true},
    {skill: 'CSS', exp: true},
    {skill: 'Express', exp: true},
    {skill: 'Node.JS', exp: true},
    {skill: 'Python', exp: false},
    {skill: 'C++', exp: false},
    {skill: 'Unit Testing', exp: false},
    {skill: 'React', exp: false},
];

function getAll() {
    return skills;
}
function getOne(id) {
    return skills[id];
}
function create(skill) {
    skills.push(skill);
}
function update(id, skill) {
    skills.splice(id, 1, skill);
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
}