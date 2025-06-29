const JokeModel=require('../models/joke.models')

const getJokes=async (req,res)=>{
    let data=undefined;
    const category=req.query.category;
    if(category)
    {
        data=await JokeModel.find({
            category:category
            // category:category[1]
        })
    }
    else
    {
        data=await JokeModel.find()
    }
    // console.log(data);
    return res.status(200).json(
    {
        "data":data,
    })
}

const getOneJokes=async(req,res)=>{
    try {
        const id=req.params.id;
        const data = await JokeModel.findOne({
            id:id
        })
        if(data)
        {
            return res.status(200).json({
                "data":data,
                message:"valid id"
            })
        }
        return res.status(404).json({
            message:"id is invalid"
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
    // console.log(id);
}

const postJokes=async(req,res)=>{
    try {
        // console.log(req.body);
        const id=req.body.id
        const idId=await JokeModel.findOne({
            id:id
        })
        if(idId)
        {
            return res.status(400).json({
                success:false,
                message:"Id already Exist"
            })
        }
        const data =await JokeModel.create(req.body)
        if(data)
        {
            return res.status(200).json({
                message:"Successfully created your jokes",
                success:true
            })
        }
        return res.status(400).json({
            success:false,
            message:"failed to create joke"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const deleteJokes=async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await JokeModel.deleteOne({
            id:id
        })
        if(data.deletedCount)
        {
            return res.status(200).json({
                success:true,
                message:"Deleted Successfully"
            })
        }
        return res.status(400).json({
            success:false,
            message:"id not found"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const updateJokes=async (req,res)=>{
    try {
    const id=req.params.id;
    const updatedData=req.body
    const data = await JokeModel.updateOne(
        {
            id:id
        },
        {
            $set:updatedData
        }
    )
        if(data.matchedCount==0)
        {
            return res.status(400).json({
                success:false,
                message:"id not found"
            })
        }
        if(data.modifiedCount==0)
        {
            return res.status(200).json({
                    success:true,
                    message:"Modiefied nhi hua kuki prev and actual are same"
                })
            }
            return res.status(200).json({
                    success:true,
                    message:"Updated Successfully"
                })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}



module.exports={getJokes,getOneJokes,deleteJokes,postJokes,updateJokes}