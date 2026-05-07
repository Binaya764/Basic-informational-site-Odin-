const authors = [
    {id : 1, name : "Bigyan"},
    {id : 2, name : "Ram"},
    {id : 3, name : "json"},
];

async function getAuthorById(authorId){
    return authors.find(author => author.id === authorId);

};

module.exports = {getAuthorById};