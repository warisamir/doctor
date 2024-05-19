import User from '../models/UserSchema.js'

export const updatedUser=async(req,res)=>{
    const id=req.params.id;
    try{
        const updateUser=await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({success:true,
         message:"succesfully update",
        data: updateUser})
    }
    catch(error){
        res.status(500).json({success:false,
            message:error})
    }
}

export const deleteUser=async(req,res)=>{
    const id=req.params.id;
    try{
      await User.findByIdAndDelete(id);
      res.status(200).json({success:true,
        message:"succesfully delete"})
    }
    catch(error){
        res.status(500).json({success:false,
            message:"failed to delete"})
    }
}

export const getSingleUser=async(req,res)=>{
    const id=req.params.id;
    try{
        const user=await User.findById(id).select('-password')
        res.status(200).json({success:true,
         message:"succesfully user found",
        data: user})
    }
    catch(error){
        res.status(404).json({success:false,
            message:"user not found"})
    }
}

export const getAllUser=async(req,res)=>{
    const id=req.params.id;
    try{
        const user=await User.find({}).select('-password')
        res.status(200).json({success:true,
         message:"list of users",
        data: user})
    }
    catch(error){
        res.status(404).json({success:true,
            message:"no user found "})
    }
}