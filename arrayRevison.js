let nums = [2,0,2,1,1,0];
//Output: [0,0,1,1,2,2];


function SortOrder(nums){
let redArray=[];
let whiteArray=[];
let blueArray=[];
for(let i =0;i<nums.length;i++){
   if(nums[i] === 0){
      redArray.push(nums[i]);
   }
   if(nums[i] === 1){
    whiteArray.push(nums[i]);
 }
 if(nums[i] === 2){
    blueArray.push(nums[i]);
 }
}

return [...redArray,...whiteArray,...blueArray];
}

let result=SortOrder(nums);
console.log(result);

//find the majority element //
let array10 = [2,2,1,1,1,2,2];
//Output: 3
//The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
function MajorityElement(array10){
 let majority=array10[0];
 let votes=1;
 for(let i=1;i<array10.length;i++){
  if(votes == 0){
    votes++;
   majority=array10[i];
  }else if(majority=array10[i]){
  votes++
  }else{
   votes--;
  }
 }
 return `the majority element ${majority}`;
}

let result13=MajorityElement(array10);
console.log(result13);


const arr = [5, 3, 2, 3];

const uniqueelement=arr.filter((num)=>arr.indexOf(num) === arr.lastIndexOf(num));
console.log(uniqueelement);
