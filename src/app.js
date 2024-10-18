const express = require("express");
const connectdb = require("./config/database");

const app = express();
const { adminauth, userauth } = require("./middlewares/auth");
const User = require("./models/user");

app.use(express.json());
app.post("/signup", async (req, res) => {
  // console.log(req.body);
  const user = new User(req.body);

  try {
    await user.save();
    res.send("Database send successfully");
  } catch (err) {
    res.status(404).send(err.message);
  }
});

connectdb()
  .then(() => {
    console.log("Database connection established!!");
    app.listen(7777, () => {
      console.log("Server Started!!!");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!!");
  });

//Handle auth middleware for all request GET,POST ,PATCH,DELETE.
// app.use("/admin", adminauth);

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("Something went Wrong!!!");
//   }
// });
// app.get("/getuserdata", (req, res, next) => {
//    try {
//     throw new error("jijdjijd");
//     res.send("User Data sent!!");
//   } catch (err) {
//     res.status(500).send("Something went Wrong");
//   }
// });

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("Something went Wrong!!!");
//   }
// });
// app.use("/user",userauth,(req,res,next)=>{
//   res.send("User Data sent!!");
// })

// app.get("/admin/getAllData", (req, res) => {
//   res.send("All data sent!!!");
// });

// app.get("/admin/deleteUser", (req, res) => {
//   res.send("Deleted a user");
// });

// app.use("/",(req,res)=>{
//    res.send("Hadling/routers");
// });

//this will only handle get api(s)
// app.get("/user/:userId/:name", (req, res) => {
//   console.log(req.params);
//   res.send({ firstname: "Diptesh", lastname: "kumar" });
// });

// app.get("/user1",(req,res,next)=>{
//    console.log("router handler 1");
//  res.send("1");
//     next();
// });
// app.get("/user1",(req,res,next)=>{
//    console.log("router handler 2");
//    res.send("2");
// })

// app.use(
//   "/user",[
//   (req, res, next) => {
//     console.log("router handler 1");
//     next();
//  res.send("Route Handler 1");
//   },
//   (req, res, next) => {
//     console.log("router handler 2");
//     next();
//  res.send("Route Handler 2");
//   }],
//   (req, res, next) => {
//     console.log("router handler 3");
//     next();
//    //  res.send("Route Handler 3");
//   },
//   (req, res, next) => {
//     console.log("router handler 4");
//     //  res.send("Route Handler 4");
//     next();
//   },
//   (req, res,next) => {
//    console.log("router handler 5");
//     res.send("Route Handler 5");
//   }
// );
// app.post("/user",(req,res)=>{
//    res.send({College:"IIT Roorkee", Branch:"Metallurgical And Materials Engineering"});
// });
// app.use("/diptesh/kumar", (req, res) => {
//   res.send("Diptesh songara");
// });

// app.use("/test", (req, res) => {
//   res.send("Hello world");
// });
// app.use("/", (req, res) => {
//   res.send("Hello world again!!");
// });
// app.listen(7777);
