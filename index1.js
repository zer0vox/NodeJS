const { properCase, slugify, truncate } = require("./string.js");
console.log(properCase("hello"));
console.log(slugify("Hello World"));
console.log(truncate("Hello World This is the first time i am using node js"));
