const mongodb = require('..db/connect');

const getData = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('user').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = {getData};


// const data = {
//     professionalName: 'Diane Arndt',
//     nameLink: {
//        firstName: 'Diane',
//        url: 'https://dianearndt.app/', 
//     },
//     firstName: 'Diane',
//     primaryDescription: 'is a student at BYU-I',
//     workDescription1: 'She works full time as a kitchen manager in the local junior highschool.',
//     workDescription2: 'She would like to work as a web developer and eventually a backend developer.',
//     linkTitleText: 'Check out her github below',
//     linkedInLink: {
//         link: 'https://www.linkedin.com/in/diane-a-6a55b7161/',
//         text: 'LinkedIn',
//     },
//     gethubLink: {
//         link: 'https://github.com/Diarndt',
//         text: 'GitHub',
//     },
//     contactText:
//     'Contact her at diarndt36d@gmail.com to hire.',
// };

// exports.getData = (req, res, next) => {
//     //await mongodb call
//     res.status(200).json(data);
// };