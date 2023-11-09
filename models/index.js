const User = require('./User');
const Question = require('./Question');
const Answer = require('./Answer');
const Rank = require('./Rank');
const UserAnswer = require('./UserAnswer');
// const AnswerRank = require('./AnswerRank');
const Genre = require('./Genre');

Question.hasMany(Answer,{
    foreignKey: 'question_id',
})

Answer.belongsTo(Question,{
    foreignKey: 'question_id',
})

Answer.hasOne(Rank,{
    foreignKey: 'answer_id',
})

Rank.belongsTo(Answer,{
    foreignKey: 'answer_id',
})

// Answer.belongsToMany(Rank,{
//     through: {
//         model: AnswerRank
//     }
// })

// Rank.belongsToMany(Answer,{
//     through: {
//         model: AnswerRank
//     }
// })

//Question belongs to a Genre
// Question.belongsTo(Genre, {
//     foreignKey: 'genre_id',
// });

Genre.hasMany(Question, {
    foreignKey: 'genre_id',
});


//Each Question has 1 Genre
Question.belongsTo(Genre, {
    foreignKey: 'genre_id',
});

//module.exports={User, Question, Answer, Rank, AnswerRank};
module.exports={User, Question, Answer, Rank, Genre, UserAnswer};
