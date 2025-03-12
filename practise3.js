let nums = [-1,0,1,2,-1,-4]; 
const target=9;

const Twosum=(target,nums)=>{
    let requirednum=0;
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        requirednum=target-nums[i];
        if(map.has(requirednum)){
         console.log(map);
         return [map.get(requirednum),i];
        }
        map.set(nums[i],i);

     
    }
   
    
    }
    
    let result35=Twosum(target,nums);
    console.log(result35);

    //three sum sum of triplets should be zero//
    let array = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
const ThreeSum=(array)=>{
array.sort((a,b)=>(a-b))
let result=[];
for(let i=0; i<array.length-2 ;i++){
   let left =i+1;
   let right=array.length-1;
   while(left < right){
    let sum=array[i] + array[left] + array[right];
    if(sum == 0){
        result.push([array[i] , array[left] ,array[right]]);
        //avoid duplicates//
      
        left++;
        right--;
        
    }else if( sum < 0){
        left ++;
    }else{
        right --;
    }
   }

}
return result;
}

let result60=ThreeSum(array);
console.log(result60);

//maximun and second maxmimun in array//
//kadane algorithim//
let arr=[-2,1,-3,4,-1,2,1,-5,4];
const maxSubArray=(arr)=>{
let maxSum=0;
let currentSum=0;
for (let num of arr) {
        currentSum=Math.max(num,currentSum+num);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

 let result6=maxSubArray(arr);
 console.log(result6);
 const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        required: true,
        unique:true
        },
    password: {
        type: String,
        required: true
        },
    role: {
        type: String,
        enum: ['admin', 'doctor', 'receptionist', 'patient', 'pharmacist', 'accountant'],
        required: true
        },
    isActive: { type: Boolean, default: true },
    // Role-based fields
    doctorDetails: {
        name:String,
        profile: String,
        gender:String,
        email:String,
        mobile:Number,
        city:String,
        dob:Date,
        education: String,
        address:String,
        experience: Number,
        username: String,
        password:String,
        image:String
    },
    patientDetails: {
        firstname:string,
        lastname:string,
        mobile:Number,
        email:String,
        gender: String,
        age: Number,
        city:String,
        emergency_contact_name:String,
        relationship_to_patient:String,
        emergency_contact_number:Number,
        medicalHistory: [String]
    },
    pharmacistDetails: {
        username: String,
        password:String,
        employeeId: String,
        shift: String,
        education:String
    },
    accountantDetails: {
        username: String,
        password:String,
        employeeId: String,
        shift: String,
        education:String
    },
    receptionistDetails: {
        username: String,
        password:String,
        employeeId: String,
        shift: String,
        education:String
    }
});
module.exports = mongoose.model('User', UserSchema);