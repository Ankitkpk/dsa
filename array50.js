let array2= [1, 9, 3, 10, 4, 20, 2];

function LongestConsecutiveRange(array2){
    array2.sort((a,b)=>a-b);
    let count=0;
    let range=0;
    for(let i = 0; i < array2.length;i++){
       if(array2[i] + 1 == array2[i +1] ){
         count++;
        }
        if(count > range){
            range =count;
        }
        
    }
    return `consecutive range is  ${range}`;
}

let test=LongestConsecutiveRange(array2);
console.log(test);

//Subarray with Given Sum //
let array=[1, 4, 20, 3, 10, 5];

//insert element in array//
let array4=[60,30, 67, 40];
let newel=70;
let position=2;
function insertElement(array4,position,newel){
for(let i=array4.length-1;i>=0;i--){
   if(i>=position){
     array4[i+1]=array4[i];
     if(i == position){
     array4[i]= newel;
     }
   }
}
return array4;
}

let result=insertElement(array4,position,newel);
console.log(result);

//kadane allorithim//
//mearge two sorted array//

let nums1 = [1,2,3];
let m = 3; 
let nums2 = [2,5,6]; 
let n = 3;
Output: [1,2,2,3,5,6]

function meargeSorted(nums1,nums2,m,n){
//mearge array in reverse order//
let p1=m-1;
let p2=n-1;
let p=m+n -1 //points to the last index in num1//
while(p1 >= 0 && p2 >= 0){
if(nums1[p1] > nums2[p2]){
  console.log(nums1[p1])
  nums1[p]=nums1[p1];
  p1--;
  p--;
}
if(nums2[p2] > nums1[p1]){
  nums1[p] = nums2[p2];
  p2--;
  p--;
}
//place the remaining element of p2 //
while(p2 >= 0){
  nums1[p]=nums2[p2];
  p--;
  p2--;
}
}
return nums1;
}

let result5=meargeSorted(nums1,nums2);
console.log(result5);

let nums = [3,2,2,3];
let val = 3;
// output nums = [2,2,_,_]
//remove element //

function RemoveEelement(nums, val){
let count=0;
for(let i = 0 ; i< nums.length;i++){
  if(nums[i] !== val){
   nums[count]=nums[i];
   count++;
  }
}
return count++;
}

let result2=RemoveEelement(nums,val);
console.log(result2);

let strs = ["eat","tea","tan","ate","nat","bat"];

//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

let nums10 = [100,4,200,1,3,2];
Output: 4


function LongestConsecutive(nums10) {
  if (nums10.length === 0) return 0;

  let set = new Set(nums10);  // Add all numbers to a set for O(1) lookup
  let longestStreak = 0;

  for (let num of set) {
    // Check if it is the start of a sequence
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Count consecutive numbers
      while (set.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      // Update longest streak
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}
//optional channing help when your value is undefine or null//
//this and bind keyword in javascript//  
let nums15 = [100, 4, 200, 1, 3, 2];
let result17 = LongestConsecutive(nums10);
console.log(result17);  // Output: 4 (because the longest consecutive sequence is [1, 2, 3, 4])

//find missing  number leetcode //
nums20 = [9,6,4,2,3,5,7,0,1]

function missingNumber(nums20){
//length will be plus one since one element is already missing//
  let n=nums20.length + 1;
  let sum = Math.floor((n * (n - 1)) / 2);
  let total=0;
  console.log(`the summation is ${n}`);
  for(let i=0;i<nums20.length; i++){
  total = total + nums20[i];
  }
  console.log(`the total element will be ${total}`);
  let missing=sum - total;
  return ` the missing number from array is ${missing}`;
}

let result56=missingNumber(nums20);
console.log(result56);



/*
function getColor(colorCode) {
  let color;
  switch(colorCode) {
      case 1:
          color = "red";
          break;
      case 2:
          color = "blue";
          break;
      case 3:
          color = "pink";
          break;
      default:
          color = "black";
  }
  return color;
}

*/
function getColor(colorCode){

  const Obj={
     1:"red",
     2:"blue",
     3:"pink",
  }
  return Obj[colorCode] || "black";
}

let result89=getColor();
console.log(result89);

//determin if two strings are close //
let word1 = "abc";
let  word2 = "aa";
Output: true

function DetermineClose(word1 , word2){
  if(word1.length !==word2.length){
    return false;
  }
  let freq1=new Map();
  let freq2=new Map();
  //store the element in map//
  for(let char of word1){
    freq1.set(char,(freq1[char] || 0) + 1);

  }
  for(let char of word2){
    freq2.set(char,(freq2[char] || 0) + 1);
    
  }
  //check if both words have same  unique frequency //
const keys1=Array.from(freq1.keys()).sort();
const keys2=Array.from(freq2.keys()).sort();
if(keys1.join('') !== keys2.join('')){
  return false;
}
//check if both have same sorted value frequency count//
const freq1values=Array.from(freq1.values()).sort((a,b)=>a-b);
const freq2values=Array.from(freq2.values()).sort((a,b)=>a-b)
console.log(freq1values);
console.log(freq2values);
return freq1values.join('')== freq2values.join('');
}

let result55=DetermineClose(word1,word2);
console.log(result55);

//contain duplicate//
let nums30 = [1,2,3,1,2,3]; 
let k = 2;
//Output: true


function containDuplicate(nums30,k){
let seen=new Set();
for(let i=0;i<nums30.length;i++){
  if(seen.has(nums30[i])){
    return true;
  }
  seen.add(nums30[i])
  //maintain window size if increases remove first element //
  if(seen.size > k){
    seen.delete(nums30[i-k])
  }
}
return false;
}


let result45=containDuplicate(nums30,k);
console.log(result45);





//leetcode top k element //
let nums55 = [1,1,1,2,2,3];
let t = 2;

function TopEelement(nums55,t){
  const obj = {};
  nums55.forEach(num => {
    obj[num]=(obj[num] || 0)+1
  });
  //convert object into arrray [number, frequency]//
  const arr=Object.entries(obj);
  const sorted= arr.sort((a,b)=>b-a);
 const top=sorted.slice(0,t).map((entry)=>Number(entry[0]));
return top;
}

let result88=TopEelement(nums55,t);
console.log(result88);


let nums45 = [3,2,3];//

function MajorityElement(nums45){
  let majority=nums45[0];
  let votes=1;
  for(let i=1;i<nums45.length;i++){
    if(nums45[i] == majority){
     votes++;
    }else if(majority == nums45[i]){
      votes=1;
    }else{
      votes--;
    }
  }
  return `the ${majority} is majority element `;
}

let result78=MajorityElement(nums45);
console.log(result78);

//
let nums40 = [1,0,1,1];
let p = 1;

function containDuplicate2(nums40,p){
  let seen=new Set();

for(let i=0;i<nums40.length;i++){
  if(seen.has(nums40[i])){
    return true
  }
  seen.add(nums40[i]);
//ajdust window size//
  if(seen.size > p){
   seen.delete(i-p);
   return false
  }
}
return false;
}

let result6=containDuplicate(nums40,p);
console.log(result6);

//longest common prefix//
let str = ["flower","flow","flight"]
//Output: "fl"

function CommonPrefix(str){
 let str1=str[0];
 for(let i=1;i<str.length;i++){
     while(str1.includes(str[i])==0){
      str1= str1.substring(0, str1.length - 1);
     }
 }
 return `the longest common prefix ${str1}`
}

let result24=CommonPrefix(str);
console.log(result24);













































































































































































































































































































    








































