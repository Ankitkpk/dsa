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

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

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

let nums10 = [100, 4, 200, 1, 3, 2];
let result17 = LongestConsecutive(nums10);
console.log(result17);  // Output: 4 (because the longest consecutive sequence is [1, 2, 3, 4])



































































































































































































































































































































    








































