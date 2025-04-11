function mergeSorted(nums1, nums2, m, n) {
    // Merge arrays in reverse order
    let p1 = m - 1;  // Pointer for nums1
    let p2 = n - 1;  // Pointer for nums2
    let p = m + n - 1;  // Points to the last index in nums1
    while(p1 >=0 && p2 >=0){
        if(nums1[p1] > nums2[p2]){
            nums1[p] =nums1[p1];
            p1--;
        }else{
            nums1[p]=nums2[p2];
            p2--;
        }
        p--;
    }
    while(p2 >=0 ){
      nums1[p]=nums2[p2];
      p2--;
      p--;
    }
    console.log(nums1);  // Print the merged array
}

// Example usage
const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3;
mergeSorted(nums1, nums2, m, n);  // Output: [1, 2, 2, 3, 5, 6]

let nums8 = [3,2,2,3]; 
let val = 3;
 //output//
 const RemoveEelement=(nums8,val)=>{
    let count=0;
    for(let i=0;i<nums8.length;i++){
        if(nums8[i] !== val){
           nums8[count] = nums8[i];
           count++;
        }
    }
    return count;
 }

 let result=RemoveEelement(nums8,val);
 console.log( nums8.slice(0,result));

 let strs = ["eat","tea","tan","ate","nat","bat"];

//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function GroupAnagram(strs){
  let map=new Map;
  for(let word of strs){
    let sorted = word.split('').sort().join('');
   if(!map.has(sorted)){
    map.set(sorted,[]);
   }
   map.get(sorted).push(word);
  }

return Array.from(map);
}

let result10=GroupAnagram(strs);
console.log(result10);

let nums20 = [1,3,5,4,7];
//output 3

function longestCommonIncreasingSubsequence(nums20){
 let currentsequenc=1;
 let longest=1;
 for(let i=1;i<nums20.length;i++){
    if(nums20[i] > nums20[i-1]){
       currentsequenc+=1;
    }else{
     currentsequenc=1;
    }
    longest=Math.max(currentsequenc,longest);
 }
return `longest commonincressing ${longest}`;
}

let result8=longestCommonIncreasingSubsequence(nums20);
console.log(result8);

let s = "bbbb"
//Output: 3

function LongestSubstringwithoutReapaeting(s){
  let left=0;
  let map=new Map();
  let maxlength=0;
  for(let right=0;right<s.length;right++){
    if(map.has(s[right])){
     map.delete(s[left]);
     left++;
    }
    map.set(s[right]);
    maxlength=Math.max(maxlength , right - left + 1);
  }
  return`longest non reapeating charecters ${ maxlength}`;
}

let result34=LongestSubstringwithoutReapaeting(s);
console.log(result34);
let text1 = "babad";
let s2 = text1.length;
let text2 = text1.split("").reverse().join("");
let strlen = text2.length;

// Function to find the longest palindromic subsequence using LCS (Longest Common Subsequence)
function longestCommonSubsequence(text1, text2, s2, strlen) {
    if (s2 === 0 || strlen === 0) {
        return 0;  // Base case: If one string is empty, LCS length is 0
    }

    // Check for last character
    if (text1[s2 - 1] === text2[strlen - 1]) {
        return 1 + longestCommonSubsequence(text1, text2, s2 - 1, strlen - 1);
    } else {
        return Math.max(
            longestCommonSubsequence(text1, text2, s2 - 1, strlen),
            longestCommonSubsequence(text1, text2, s2, strlen - 1)
        );
    }
}

let result43 = longestCommonSubsequence(text1, text2, s2, strlen);
console.log(result43);

//merge two sorted array//
let nums5 = [1,2,3,0,0,0]; 
let t = 3; 
let nums4 = [2,5,6];
let u = 3;
//Output: [1,2,2,3,5,6]

function MeargeSorted(nums5,t,nums4,u){
    let left=0;
    let right=0;
    let mergeArray=[];
    while(left  < t && right < u){
       if(nums5[left] <= nums4[right]){
        // console.log(`elements of ${nums5[left]}`);
        mergeArray.push(nums5[left])
        left++
       }else{
       // console.log(`elements of ${nums4[right]}`);
        mergeArray.push(nums4[right])
        right++;
       }
       
    }
    while(right < u){
      mergeArray.push(nums4[right])
      right++;
     } 
    return mergeArray;
}

let result45=MeargeSorted(nums5,t,nums4,u);
console.log(result45);

let nums = [1,2,3,4,5,6,7];
let k = 3;
//Output: [5,6,7,1,2,3,4]
function RotateArray(nums,k){
  let n=nums.length;
  if(k > n){
    k=k %n;
  }
  //console.log([...nums.slice(0,n-k)]);
  return [ ...nums.slice(-k),...nums.slice(0,n-k)];
}

let result64=RotateArray(nums,k);
console.log(result64);

let nums10 = [-1,0,1,2,-1,-4];
//Output: [[-1,-1,2],[-1,0,1]]

function ThreeSum(nums10){
     

  return ThreeSum;
}

let result20=ThreeSum(nums10);
console.log(result20);
//reverse only aphabets in a string//


//majority element //
let nums77 = [3,2,3];
Output: 3

let digits = [9];
//Output: [1,2,4]

//let digits = [9];
//Output: [1,0]

function AddOne(digits){
//array index starts from 0 //
for(let i=digits.length-1;i>=0;i--){
    if(digits[i] < 9){
      digits[i]++;
      return digits;
    }
    digits[i]=0;
}
console.log(digits);
//[0,1]//
//if all digits are [9,9,9];
digits.unshift(1);
return digits;
}

let result4=AddOne(digits);
console.log(result4);

// Product of Array Except Self
let nums35 = [1,2,3,4]
//Output: [24,12,8,6]