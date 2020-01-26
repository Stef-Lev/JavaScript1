"use strict"
//Variable declaration
let readList = [
    {
        title: "The 7 habits of highly effective people",
        author: "Stephen R. Covey",
        alreadyRead: false
    }, {
        title: "The Lean Startup",
        author: "Eric Ries",
        alreadyRead: true
    }, {
        title: "Neuro-linguistic Programming for Dummies",
        author: "Kate Burton",
        alreadyRead: true
    }
];
//Just looping through the array
readList.forEach(x => {
    console.log(x);
})
//Console logging each book title and author
readList.forEach(x => {
    console.log(`${x.title} by ${x.author}`);

})
//Conditional statements
readList.forEach(x => {
    console.log(x.alreadyRead === true ? `You already read "${x.title}"` : `You still need to read "${x.title}"`)
})