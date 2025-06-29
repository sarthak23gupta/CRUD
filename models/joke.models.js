const {model,Schema}=require('mongoose')

const JokeSchema=new Schema({
    "id":{
        type:Number,
        unique:true
    },
    "joke":{
        type:String,
        
    },
    "category":{
        type:String,
        
    },
    "language":{
        type:String,
        
    }
});

const JokeModel=model("Joke",JokeSchema)

module.exports=JokeModel