import User from '../models/UserSchema.js'
import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'
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

export const getUserProfile=async(req,res)=>{
    const userId=req.userId
    try{
        const user=await user.findById(userId);
        if(!userId){
            return res.status(404).json({success:false,messsage:'User not found'})
        }
        const {password, ...rest}=user._doc;
        res.status(200).json({success:true,message:"Profile Info getting",data:{...rest}});
    }
    catch(err){
        res.status(500).json({success:false,messsage:'Something went wrong '})
    }
}

export const getMyAppointment=async(req,res)=>
    {
     try {
        const bookings=await Booking.find({user:req.userId})
        const doctorIds=bookings.map(el=>el.doctor.id)
        const doctors=await Doctor.find({_id:{$in:doctorIds}}).select('-password')
        res.status(200).json({success:true,message:"Appointments are getting",data:doctors})
     } catch (error) {
        res.status(500)
        .json({success:false, message:"Something went wrong ,cannnot get"})
     }
    }