// const http = require("http");
// const os = require("os");
// const fs = require("fs");
// // http
// //   .createServer((req, res) => {
// //     res.writeHead(200, { "Content-Type": "application/json" });
// //     const myRam = os.totalmem();
// //     const toGB = myRam / (1024 * 1024 * 1024);

// //     res.end(
// //       JSON.stringify({
// //         data: toGB.toFixed(2) + " GB",
// //       })
// //     );
// //   })
// //   .listen(3000);
// //use fs module to create and read the content of a file
// // fs.writeFile("pdf/file.txt", "Hello, world!", (err) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   console.log("File created successfully!");

// // });
// try {
//   const data = fs.readFileSync("myfile.txt", "utf8");
//   console.log("Reading the file ", data);
// } catch (err) {
//   console.error(err);
// }
//
const properCase = require("proper-upper-case");

const convert = (text) => {
  return properCase(text);
};
console.log(convert("sumip chaudhary"));
//slugify lodash bcryptjs passwordverify nodemailer
