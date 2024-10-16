const express = require("express");

const app = express();

// app.use( "/",(req, res) => {
//   res.send("Hello world again!!");
// });

// app.use("/diptesh", (req, res) => {
//   res.send("Diptesh Kumar ");
// });

//this will only handle get api(s)
app.get("/user/:userId/:name", (req, res) => {
  console.log(req.params);
  res.send({ firstname: "Diptesh", lastname: "kumar" });
});

app.use(
  "/user",[
  (req, res, next) => {
    console.log("router handler 1");
    next();
   //  res.send("Route Handler 1");
  },
  (req, res, next) => {
    console.log("router handler 2");
    next();
   //  res.send("Route Handler 2");
  }],
  (req, res, next) => {
    console.log("router handler 3");
    next();
   //  res.send("Route Handler 3");
  },
  (req, res, next) => {
    console.log("router handler 4");
    //  res.send("Route Handler 4");
    next();
  },
  (req, res,next) => {
   console.log("router handler 5");
    res.send("Route Handler 5");
  }
);
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
app.listen(7777);
