//find intersection of two arrays//
let array1 = [1,2,2,1];
let array2 = [2,2];

function intersection(array1, array2){
 return array1.filter(value =>array2.includes(value));
}

let result=intersection(array1,array2);
console.log(result);

//longest common prefix//
let strs=["flower","flow","flight"];
  function longestCommonPrefix(strs) {
    let prefix=strs[0];
    
    for(let i=1;i<strs.length;i++){
        while(strs[i].indexOf(prefix)!==0){
            prefix=prefix.substring(0,prefix.length-1)

        }
    }
    return `longest common prefix ${prefix}`;
};

let result2=longestCommonPrefix(strs);
console.log(result2);

//rotate array //
let nums = [1,2,3,4,5,6,7]; 
//Output: [5,6,7,1,2,3,4]
let k = 3;


function rotateArray(nums,k){
   let n=nums.length;
   //to handle cases k is greator than n
   k=k%n
   let array=nums.slice(-k);
   let array3=nums.slice(0,n-k);
  return [...array,...array3]
}
let result4=rotateArray(nums,3);
console.log(result4);

//check if the given string is pangram//
const sentence = "abcdefghijklmnopqrstuvwxy";

function pangram(sentence){
const letters=new Set();
sentence.toLowerCase();
for(let char of sentence){
    if(char =>'a' && char <='z'){
        letters.add(char);
    }
}
if(letters.size == 26){
    return `given string is pangram`
}
return `given string is not a pangram`
}

let result12=pangram(sentence);
console.log(result12);

//check if string is anagram or not //
let str1="silent";
let str2="lisest";
function anagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
  if (str1.split('').sort().join() === str2.split('').sort().join()){
    return `given two strings are anagram`
  }
  return `given string are not anagram`
}

let result30=anagram(str1,str2);
console.log(result30);

//Find Pairs in an Array That Sum to a Given Number//
findPairs([2, 4, 3, 7, 5, 8], 10)

function findPairs(array,target){
 let pairs=[];
 let set=new Set();
 for(let num of array){
    let diff=target-num;
    if(set.has(diff)){
      pairs.push([diff,nums]);
    }
    set.add(num);
 }
 return pairs;
}

let result20=findPairs([2, 4, 3, 7, 5, 8], 10);
console.log(result20);
//move all zeros to end maintain the orders o number//
