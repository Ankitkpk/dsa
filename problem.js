//Longest Substring Without Repeating Characters
let s = "abcabcbb";

function LongestSubstringwithoutReapaeting(s){
 let left=0;
 let set=new Set();
 let maxlength=0;
 let right=0;
  while(right < s.length){
  if(set.has(s[right])){
    set.delete(s[left]);
    left++;
  }
  set.add(s[right])
  maxlength=Math.max(maxlength , set.size);
  right++;
 }
 return maxlength;
}

let result=LongestSubstringwithoutReapaeting(s);
console.log(result);

let nums = [1,2,3,4];
//Output: [1,3,6,10]
function RunningSum(nums){
let output=[];
let sum=0;
for(let i=0; i<nums.length;i++){
    sum+=nums[i];
    output.push(sum);
}
return output;
}

let result12=RunningSum(nums);
console.log(result12);
//remove element//
  let array10 = [3,2,2,3];
  let val = 3;
//Output: 2, nums = [2,2,_,_]

function RemoveEelement(array10,val){
let count=0;
for(let i=0;i<array10.length;i++){
 if(array10[i]!== val){
  array10[count]=array10[i];
  count++;
 }
}
return count;
}


let result43=RemoveEelement(array10,val);
console.log(result43);
let str="()";

function isValid(str) {
  let parenthesis = { '(': ')', '{': '}', '[': ']' };
  let valid = [];
  for (let char of str) {

    if (char === '(' || char === '[' || char === '{') {
      valid.push(char);
    } else {
      if (valid.length === 0) return false;
      let lastPopped = valid.pop();
      if (parenthesis[lastPopped] !== char) {
        return false;
      }
    }
  }
  // Return true if all parentheses are matched
  return valid.length === 0;
}


let result45=isValid(str);
console.log(result45);