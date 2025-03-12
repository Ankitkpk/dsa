

//find pairs that will return you the given target//

function findPairs(array,target){
 let pairs=[];
 let set=new Set();
 for(let num of array){
    let diff=target-num;
    if(set.has(diff)){
      pairs.push([diff,num]);
    }
    set.add(num);
 }
 return pairs;
}

let result20=findPairs([2, 4, 3, 7, 5, 8], 10);
console.log(result20);
//array.flatinfinity//
function flattenArray(arr) {
    return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4], 5]]));
let num = [0,1,0,3,12];

function MoveZeros(num){
 let zeros=[];
 let numbers=[];
 for(let i = 0; i < num.length; i++){
    if(num[i] == 0){
    zeros.push(num[i]);
    }else{
        numbers.push(num[i])
    }
 }
 return [...numbers,...zeros];
}
let result40=MoveZeros(num);
console.log(result40);

//smallest positive missing number //
function smallestPositiveMissing(array){
 var array=[2,3,4,-1];
 let set=new Set(array);
 console.log(set);
 for(let i=1;i<array.length+1;i++){
     if(!set.has(i)){
        return `the smallest miising positive number is ${i}`;
    }   
   
 }
 return null;
}
console.log(smallestPositiveMissing([2,3,4,-1]));

//reverse sentence and each word in s string//

let str="this is string from ankit karapurkar";

function reverseString(str){
    
  return str.split(" ").reverse().map((word)=>word.split("").reverse().join("")).join(" ");
}

let result6=reverseString(str);
console.log(result6);

function isPrime(n) {
    if (n < 2) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) { 
      if (n % i === 0) return false; 
    }
    return true; 
  }

  //find longest word in a string //
  let str1="this is string from ankit karapurkar";
  function Longestword(str1){
    let longest='';
    str1=str1.split(" ");
    for(let word of str1){
        console.log(word);
        if(word.length > longest.length){
            longest = word;
        }
    }
    return `the longest word in the string ${longest}`;
  }

  console.log(Longestword(str1));

  //reverse only abhbats in a string ignore number //
  function ReverseChar(str2) {
    let char = str2.split(""); 
    let left = 0;
    let right = char.length - 1;

    while (left < right) {
        if (!/[a-zA-Z]/.test(char[left])) {
            left++;
        } else if (!/[a-zA-Z]/.test(char[right])) {
            right--;
        } else {
            // Correct swapping
            [char[left], char[right]] = [char[right], char[left]];
            left++;
            right--;
        }
    }

    return char.join(""); // Join back into a string
}

// Example usage:
console.log(ReverseChar("1abc4e"));
console.log(ReverseChar("a1b2c3d")); 
console.log(ReverseChar("12xy34"));  

//check if the given number is prime or not //

function Prime(n){
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i ===0){
            return false;
        }
    }
    return true;
}

//create a fibbonaci sequence

function fibbonaci(n){
 let a=0 ,b=1 ,c;
 let sequence=[0,1];
 if( n < 0 || n==1){
    return 0;
 }
 console.log(a);
 console.log(b);
 for(let i=2 ; i<n;i++){
   c=a+b;
   sequence.push(c);
   a=b;
   b=c;
 }
 return sequence;
}
//longest palindromic string without repaeting charecters//
/*
function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

*/

// Example usage
/*console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));  */  // Output: 3 ("wke")
                                                 


function lengthOfLongestSubstring(s){
 let maxlength=0;
 let left=0;
 let mySet = new Set();
for(let right=0;right <s.length;right++){
    while(mySet.has(s[right])){
        mySet.delete(s[left])
        left++;
    }
    mySet.add(s[right]);
    maxlength=Math.max(maxlength , right - left + 1);
}

return maxlength;
 
}
console.log(lengthOfLongestSubstring("bbbb"));