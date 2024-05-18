import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
export const register =async(req,res)=>{
    const {name,email,password,role, photo ,gender}=req.body;
    try{
          let  user=null;
         if(role=="patient")
            user= await User.findOne({email});
        else if(role=="doctor")
            user=await Doctor.findOne({email});
        if(user){
            return res.status(400).json({msg:"User already exists"});
        }
        const salt= await bcrypt.genSalt(10);
        const hash= await bcrypt.hash(password,salt);
        if(role=="patient"){
            user=new User({
        name,email,
    password:hash,
     photo, gender ,role})
            }
            if(role=="doctor"){
                user=new Doctor({
            name,email,
        password:hash,
         photo, gender ,role})
                }
                await user.save();
                res.status(200).json({sucess:true,message:"User sucessfully created "})
       }catch(err){
        res.status(500).json({sucesss:false,message:"Intern server error"})
    }
}
export const login =async(req,res)=>{
    try{
        const {email,password}=req.body
        const user =await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"user does not exist"})
        }
        const isMatch =await bcrypt.compare(password,user.password)
}
catch(err){
    res.status(500).json({message:"Internal server error"})
}
}
