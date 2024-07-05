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
//-------------------------------------------------------------------------------------------------------------------------------------
// const properCase = require("proper-upper-case");

// const convert = (text) => {
//   return properCase(text);
// };
// const slugify = require("slugify");
// const slug = (text) => {
//   return slugify(text);
// };
// const lodash = require("lodash");
// const bcrypt = require("bcryptjs");
// const trunc = (text) => {
//   res = lodash.truncate(text);
//   return res;
// };
// console.log(convert("sumip chaudhary"));
// console.log(slug("sumip chaudhary"));
// console.log(trunc("GeeksforGeeks is a computer science portal."));
//slugify lodash bcryptjs passwordverify nodemailer
// const password = "myPassword123";
// const bcrypt = require("bcrypt");
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("Hashed password:", hash);

//     bcrypt.compare(password, hash, (err, isMatch) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log("Password match:", isMatch);
//     });
//   });
// });
import bcryptjs from "bcryptjs";
const encryptPw = (text) => bcryptjs.hashSync(text);

const hashPw = encryptPw("password");
console.log(hashPw);
