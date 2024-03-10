import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        require:true,
    },
    sports:{
        type:String,
        require:true,
    },
    avatar:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    number:{
        type:Number,
        required:true,
    },
    admin:{
       type:Boolean,
       default: false,
       required: true
    },
},{timestamps:true});
const User = mongoose.model('User',userSchema);
export default User;