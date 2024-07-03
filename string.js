const slugify = (word) => {
  return word.toLowerCase().toString().split(" ").join("-");
};

const properCase = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

const truncate = (word) => {
  const num = prompt("Enter the limit");
  if (word.length > num) {
    return word.slice(0, num) + "...";
  }
  return word;
};
// console.log(properCase("hello"));
// console.log(slugify("Hello World"));
//console.log(truncate("Hello World This is the first time i am using node js"));
module.exports = { slugify, properCase, truncate };
