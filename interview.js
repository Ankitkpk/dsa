//longest substring without reapting charecters//
/*let s = "abcabcbb"
Output: 3
function LongestSubstringwithoutReapaeting(s){
let left=0;
let maxlength=0;
let set=new Set();
for(let right=0; right<s.length;right++){
    if(set.has(s[right])){
      set.delete(s[left]);
      left ++;
    }
    set.add(s[right])
  maxlength=Math.max(maxlength ,  right-left + 1);
}
return `the longest non repaeating charecter length is ${maxlength}`;
}

let result=LongestSubstringwithoutReapaeting(s);
console.log(result);

//longest consecutive range //


function  LongestConsecutiveRange(array){
    let maxcount=0;
    array.sort((a,b)=>a-b);
    for(let i = 0 ;i< array.length;i++){
     if(array[i+1] == array[i]+1){
        maxcount++;
     }
    }
return maxcount;
}

let result2=LongestConsecutiveRange([1, 9, 3, 10, 4, 20, 2])
console.log(result2);
//longest palindromic string //


//check if two strings are anangram//


let str1="geeksforgeeks";
let str2="forgeeksgeeks";
function checkAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    if( str1.split("").sort().join('') == str2.split("").sort().join(''));{
        return 'Yes'
    }
    return false;
}

let result15=checkAnagram(str1,str2);
console.log(result15)

//valid parenthesis in javascript//

let str="()";
const isValid=(str)=>{
let stack=[];
let pairs={'(': ')', '{': '}', '[' : ']'};

for(char of str){
    if(char ==='(' || char==='{' || char ==='[' ){
      stack.push(char);
    }else{
        let last=stack.pop();
        if(pairs[last]!== char){
            return false;
        }
    }
}
return stack.length === 0;
}

let result10=isValid(str);
console.log(result10);

*/
function longestCommonSubsequence(text1,text2,m=text1.length,n=text2.length){
    if(m ===0 || n===0){
        return  false;
    }
    //check for last chareacter//
    if(text1[m-1] === text2[n-1]){
        //reduce the length by 1//
        return 1 + longestCommonSubsequence(text1,text2,m-1,n-1)
    }else{
        return Math.max(longestCommonSubsequence(text1,text2,m-1,n),
                         longestCommonSubsequence(text1,text2,m,n-1));
    }

}

// Example Usage
console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3 ("ace")

//longest incresing subsequence//
function lengthOfLIS(nums) {
    let sub = [];

    for (let num of nums) {
        let left = 0, right = sub.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (sub[mid] >= num) right = mid - 1;
            else left = mid + 1;
        }

        if (left < sub.length) {
        
            sub[left] = num;
        } else {
            sub.push(num);
        }
    return sub.length;
}
}

// Example usage
console.log("Final Output:", lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));

//group anangrams//
let strs = ["eat","tea","tan","ate","nat","bat"];

function GroupAnagram(strs){
let map=new Map();
strs.forEach(word => {
  const sortword=word.split("").sort().join("");
    if(!map.has(sortword)){
        map.set(sortword,[]);
    }
    //get value at that key //
    map.get(sortword).push(word)
});
return Array.from(map.values());
}

let result10=GroupAnagram(strs);
console.log(result10);

//longest pallindromic subsequence //
function longestPalindromicSubsequence(s) {
    let n = s.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(0));

    console.table(dp); // Display the initial DP table

    // Base case: single characters are palindromes of length 1
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    // Fill DP table for substrings of length 2 to n
    for (let length = 2; length <= n; length++) {
        console.log(`Processing substrings of length: ${length}`);

        for (let i = 0; i <= n - length; i++) {
            let j = i + length - 1;
            console.log(`Checking substring: "${s.substring(i, j + 1)}" (i=${i}, j=${j})`);

            if (s[i] === s[j]) {
                dp[i][j] = 2 + (i + 1 <= j - 1 ? dp[i + 1][j - 1] : 0);
                console.log(`Characters match (${s[i]} == ${s[j]}), updating dp[${i}][${j}] = 2 + dp[${i + 1}][${j - 1}] → ${dp[i][j]}`);
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                console.log(`Characters do NOT match (${s[i]} != ${s[j]}), updating dp[${i}][${j}] = max(dp[${i + 1}][${j}], dp[${i}][${j - 1}]) → ${dp[i][j]}`);
            }
        }

        console.log("DP table after processing this length:");
        console.table(dp);
    }

    console.log("Final DP table:");
    console.table(dp);

    return dp[0][n - 1]; // Length of longest palindromic subsequence
}

// Example Usage:
console.log("Result for 'bbbab':", longestPalindromicSubsequence("bbbab")); // Output: 4 (LPS: "bbbb")
console.log("Result for 'cbbd':", longestPalindromicSubsequence("cbbd"));  // Output: 2 (LPS: "bb")

//In prototypal inheritance, an object can inherit properties and methods from another object.

//This is achieved via the prototype chain, where one object serves as a prototype for another.

//In JavaScript, this is done using Object.create(), __proto__, or Object.setPrototypeOf()

//In classical inheritance, properties and methods are inherited from a class rather than directly from an object.

//In JavaScript (with ES6+), this is done using the class and extends keywords.

//However, classical inheritance in JavaScript is still based on prototypal inheritance under the hood.

//It does allow inheritance, but through class-based structure rather than directly linking objects.

let s = "bbbab"
//Output: 4



let str = "cb34n";

Output: ""

function ClearDigits(str) {
  let stack=[];
  for(let char of str){
    if(/\d/.test(char)){
     //to check if it is a didgit//
     //to check if any wlwmwnt already exist in stack//
     if(stack.length){
        stack.pop();
     } 
      
    }else{
        stack.push(char)
    }
  }
  return `value of string after digits clear is ${stack.join("")}`;
  }
let result20=ClearDigits(str);
console.log(result20);


console.log("start");

setTimeout(()=>{
    console.log("Macrotask:setTimeout")
},0)

Promise.resolve().then(() =>{
    console.log("Macrotask:promise 1");
}).then(()=>{
    console.log("Micrtask:promise 2");
});
console.log("End");


let nums = [3,2,1,5,6,4];
let k = 2;
//Output: 5 without sorting//
let nums9 = [2,7,11,15];
let  target = 9;
//Output: [0,1]

function TwoSum(nums9,target){
let requiredNum=0;
let map=new Map();
for(let i=0;i<nums.length;i++){
    requiredNum=target-nums9[i]
    if(map.has(requiredNum)){
    return  map.get(requiredNum , i);
    }
    map.set(nums9[i], i);
}

}

let result=TwoSum(nums9,target);

console.log(result);
let nums24 = [-1,0,1,2,-1,-4];
//Output: [[-1,-1,2],[-1,0,1]]

function ThreeSum(nums24){
let result=[];
let left=0;
let right=nums24.length;
while(left < right){
    for(let i=1;i<nums24.length-2;i++){
        let sum=nums24[left] + nums24[right] + nums24[i];
        if(sum == 0){
            result.push(nums24[left]);
            result.push(nums24[right]);
            result.push(nums24[i]);
            left++;
            right--;
        }else if( sum < 0){
        left++;
        }else{
         right--;
        }
       }
}

return result;
}

let result78=ThreeSum(nums24);
console.log(result78);