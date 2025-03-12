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
        return false;
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
