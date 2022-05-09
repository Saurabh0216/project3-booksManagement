const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema(

{ 
    title: {
      type: string,
       required:true,
       unique:true
      },
    excerpt: {
      type: string,
      required:true
    }, 
    userId: {
      type: ObjectId,
      refs:user,
      required: true
      },
    ISBN: {
      type:string,
       required:true, 
       unique:true
      },
    category: {
      type:string, 
      required:true
    },
    subcategory: [string, mandatory],
    reviews: {
      type:number,
     default: 0, 
    },
    deletedAt: {
      type:Date }, 
    isDeleted: {
      type:boolean, 
      default: false
    },
    releasedAt: {
      type:Date,
      required:true
    }
    },
      {timestamps:true})
  module.export=mongoose.model("book",bookSchema)