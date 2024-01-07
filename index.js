// Import NPM Package
var _ = require('lodash');


const languages = [ "Java", "Javascript", "Typescript" ];


// First Answer 
if (_.includes(languages, "Java")) {
    console.log("The array contains 'Java'.");
}
else
{
    console.log("The array does not contain 'Java'.");
}

// Second Answer
if (_.includes(languages, "C++")) {
    console.log("The array contains 'C++'.");
}
else
{
    console.log("The array does not contain 'C++'.");
}