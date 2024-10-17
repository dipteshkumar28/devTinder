const mongoose = require("mongoose");

const connectdb = async () => {
  await mongoose.connect("mongodb+srv://diptesh475:xZ5UixiexRYUIXcH@cluster0.vl9hd.mongodb.net/devTinder");
};



module.exports=connectdb;
