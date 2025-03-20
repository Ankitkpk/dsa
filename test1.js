//Longest Substring Without Repeating Characters//

const LongestSubstringwithoutReapaeting=(s)=>{
    let left=0;
    let set=new Set();
    let maxlength=0;
    for(let right=0; right < s.length;right++){
        if(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }
       set.add(s[right]);
       maxlength=Math.max(maxlength,right-left +1);
    }
    return maxlength;
}

let result=LongestSubstringwithoutReapaeting("bbbbb");
console.log(result);

//insert element in array in javascript//



(function(){
console.log('this is IFFE function')
})();


//syntax to create a promise //

const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log('promise is executed')
    },2000)
})

myPromise.then((data)=>console.log(data));

//two sum array problem //

let  nums = [2,7,11,15]; let target = 13;


function twoSum(nums,target){
    let requirednum=0;
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        requirednum=target - nums[i];
        if(map.has(requirednum)){
            return [map.get(requirednum),i]
        }
        map.set(nums[i],i);
        
 
    }
    return null;
}
let result10=twoSum(nums,target);
console.log(result10);

//3 sum problem //
let nums2 = [-1,0,1,2,-1,-4];

function Threesum(nums2){
if(nums2.length < 3){
    return false;
}
let set=new Set();
nums2.sort((a,b)=>a-b);

for(let i=0;i<nums2.length-2;i++){
    if( i > 0 && nums2[i] === nums2[i-1]){
        continue;
    }
    let left=i+1;
    let right=nums2.length - 1;
    while(left < right){
    let sum=nums2[i] + nums2[left] + nums2[right];
    if(sum == 0){
    set.add(JSON.stringify([nums2[i], nums2[left], nums2[right]]));
    left++;
    right--;
    //check for duplicates//
    while(left < right && nums2[left] === nums2[left-1])left++;
    while(left < right && nums2[right] === nums2[right-1])right--;
    }else if(sum < 0){
        left ++;
    }else{
        right --;
    }
    }
}

return  Array.from(set).map(triplet => JSON.parse(triplet));
}
let result12=Threesum(nums2);

console.log(result12);

//three sum closet//
let nums1 = [1,2,2,1];
let nums3=[2,2];
function Intersection(nums1,nums3){
    let result=new Set();
    let set=new Set(nums1);
   for(let num of nums3){
    if(set.has(num)){
         result.add(num);
    }
  }
  return Array.from(result);

}

let result11=Intersection(nums1,nums3);
console.log(result11);

//merge two sorted array//
let nums5 = [1,2,3,0,0,0];
let nums6 = [2,5,6];

 function mergeArray(nums5,nums6){
    const mergearray=[];
    let left=0;
    let right=0;
   let newarray= nums5.filter(num => num !== 0);
   console.log(newarray);
    while(left < nums5.length && right < nums6.length){
        if(newarray[left] < nums6[right]){
            console.log(newarray[left])
            mergearray.push(newarray[left])
            left++;     
           }
        else{
            
            mergearray.push(nums6[right])
            right++;
        }
    }
    while(left < newarray.length){
        mergearray.push(newarray[left])
        left++;
    }
  while(right < nums6.length){
        mergearray.push(nums6[right])
        right++;
    }
    return mergearray;
 }
 let result15=mergeArray(nums5,nums6);
 console.log(result15);
 console.log("hello");

 //remove duplicate from a sorted array//

let input=[0,0,1,1,1,2,2,3,3,4] //output=[0,1,2,3,4]

 const Problem=(input)=>{
 for(let i=0;i<input.length;i++){
    if(input[i] === input[i+1]){
      input.splice(i+1,1); 
      i--; 
    }
 }
 return input.length;
 }

 let result20=Problem(input);
 console.log(result20);

 //without using js inbuilt function//

 function TwoPointer(input){
   let i=0; 
   let count=1;
   for(let j=1;j<input.length;j++){
     if(input[j] !== input[i]){
        count++;
        i++;
     }
   }
return count;
 }

 let result22=TwoPointer(input);
 console.log(result22);

 //rotate and sorted array
 let array1 = [2,1,3,4];

function rotated_sorted(array1){
let breakpoint=0;
let n=array1.length;
for(let i=0;i<array1.length;i++){
    if(array1[i]> array1[(i+1) % n] ){
        breakpoint++;
    }

}
if(breakpoint > 1){
    return false;
}
return true;
}

let result14=rotated_sorted(array1);
console.log(result14);
//kadane algorithim//
/*

Output: 6 (subarray: [4,-1,2,1])

*/
let array7=[-2,1,-3,4,-1,2,1,-5,4];
function subArray(array7){
let maxsum=array7[0];
let currentSum=array7[0];
for(let i =0;i<array7.length;i++){
    currentSum=Math.max(array7[i] , currentSum + array7[i]);
    maxsum=Math.max(maxsum,currentSum);
}
return maxsum;
}

let result24=subArray(array7);
console.log(result24);

//mising number leetcode//


function spiralOder(matrix)
{    

    if(matrix.length ===0)return false;
    let result=[];
    let top=0;
    let bottom=matrix.length-1;
    let left=0;
    let right=matrix[0].length-1;

    while(top <= bottom && left <=right){
   //traverse from left to right in top boundary//
     for(let col=left ;col<=right;col++){
        result.push(matrix[top][col])
     }
     top++;
     //travserse vertical from top to bottom along right boundary//
     for(let row=top; row<=bottom.length;row++){
        console.log(matrix[row][right]);
        result.push(matrix[row][right])
     }
     right--;
     //right to lelft from bottom (if valid)//
     if(top<=bottom){
     for(let col=right;col>=left;col--){
        result.push(matrix[bottom][col])
     }
     bottom--;
    //traverse from bottom to top if(valid)//
    if(right>=left){
      for(let row=bottom;row>=top;row--){
        result.push(matrix[row][left])
      }
      left++;

    }

     }
    }
return result;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let result1= spiralOder(matrix );
console.log(result1);


let intervals = [[1,3],[8,10],[2,6],[15,18]]
//Output: [[1,6],[8,10],[15,18]]

function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;

    // Step 1: Sort intervals by the start time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const prev = merged[merged.length - 1];
        const curr = intervals[i];

        // Step 2: Check for overlap
        console.log(`the prev index ${prev[1]}`);
        console.log(` the current index ${curr[0]}`);
        if (curr[0] <= prev[1]) {
            // Merge the intervals by updating the end time
            prev[1] = Math.max(prev[1], curr[1]);
           
        } else {
            // No overlap, add the current interval to the result
            merged.push(curr);
        }
    }

    return merged;
}




let result2=mergeIntervals(intervals);
console.log(result2);