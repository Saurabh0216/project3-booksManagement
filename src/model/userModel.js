const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(



{ 
    name: {
        type: string,
        required: true,
        trim: true
    },
    title:{
           type: string,
           required: true,
           enum: ["Mr","Mrs","Miss"],
           trim: true
    },
   
    phone: {
        type: string, 
        required: true,
        unique: true
    },

    email: {
        type: string,
        required: true,
         unique: true
        }, 

    password: {
        type: string,
        required: true,
        minlength:8,
        maxlength:15
    },
    address: {
      street: {
          typr: string},
      city: {
          type: string},
      pincode: {
          type: string}
    }
 }, {timestamps : true} )

  module.export=mongoose.model("user",userSchema)