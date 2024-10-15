const express = require("express");

const app = express();

// app.use( "/",(req, res) => {
//   res.send("Hello world again!!");
// });

app.use("/diptesh", (req, res) => {
  res.send("Diptesh Kumar ");
});

//this will only handle get api(s)
app.get("/user",(req,res)=>{
   res.send({firstname:"Diptesh",lastname:"kumar"});
});

app.post("/user",(req,res)=>{
   res.send({College:"IIT Roorkee", Branch:"Metallurgical And Materials Engineering"});
});
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
