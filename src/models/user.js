const mongoose=require("mongoose");


const userschema=new mongoose.Schema({
    Firstname:{
        type:String
    },
    Lastname:{
        type:String
    },
    EmailId:{
        type:String
    },
    Password:{
        type:String
    },
    Age:{
        type:Number
    },
    Gender:{
        type:String
    }

});

const User=mongoose.model("User",userschema);
module.exports=User;
