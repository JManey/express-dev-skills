module.exports = {
    getAll,
    getOne,
}

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