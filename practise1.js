//programe to find longest word in given string //

let str="this is ankit karapurkar";

const longestWord=(str)=>{
let longest="";
let str_split=str.split(" ");
for(let i=0 ; i <str_split.length; i++ ){
   if(str_split[i].length > longest.length){
     longest =str_split[i];
   }
}
return `the longest word in a string = ${longest}`;

}

let result=longestWord(str);

console.log(result);

//check whether the string is pallindrone or not //

let str_2="mom is not";


const palindrone_string=(str_2)=>{
let reverse=str_2.split('').reverse().join('');
if(reverse === str_2){
    return `${str_2} is pallindrone`
}else{
    return `${str_2} is not  pallindrone` 
}

 
}
 
let result2=palindrone_string(str_2);
console.log(result2);

//programe to reverse word in a string witout using built in method //

const reverse_string=(str_2)=>{
let reverse="";
str_2=str_2.split(" ");
for(let i=str_2.length-1; i>=0; i--){
  reverse +=str_2[i] + " ";
}
return reverse.trim();
}

let result3=reverse_string(str_2);
console.log(result3);

//find maximun count of consecutive 1s in a arrray //

let array = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1];
const CountOnes=(array)=>{
   let maxcount=0;
   let count=0;
  for(let i=0;i<array.length;i++){
    if(array[i] == 1){
      count++;
      //Math.max its updates maxcount if current count is greater than maxcount //
      maxcount=Math.max(maxcount,count);
    }else{
        count =0;
    }
  }
  return maxcount;
}

let result4=CountOnes(array);

console.log(result4);

//find factorial of given number //

function factorial(n){
    if( n ==0 || n==1){
        return 1
    }
  return n*factorial(n-1);
}

result5=factorial(5);
console.log(result5);


let array1=[0,3,3,4];
let array2=[4,6,30];

//merge array and sort //

const mergeArray=(array1,array2)=>{
 const mergearray=[];
 let i=0;
 let j=0;

 //one more condition if the two arrays are not sorted sort the array first then mearge//
 while(i < array1.length && j  < array2.length){
    if(array1[i] < array2[j]){
        mergearray.push(array1[i]);
        i++;
    }else{
        mergearray.push(array2[j]);
        j++;
    }
    
 }

 while( i < array1.length){
    mergearray.push(array1[i]);
    i++;
 }

 while(j < array2.length){
  mergearray.push(array2[j]);
  j++;
 }
return mergearray;
}

let result6=mergeArray(array1,array2);
console.log(result6);


//given two array1 and array2 return true if every value in array1 has its coresponding square in array2 //
let array3 = [1, 2, 3, 4];
let array4 = [16, 1, 9, 4];

const Istrue=(array3,array4)=>{
    let count=0;
    const squaredArray = array3.map(value => value * value);
    console.log(squaredArray);

    for(let i=0;i<squaredArray.length;i++){
        if(array4.includes(squaredArray[i])){
            count++;
        }
    }
    if(count == squaredArray.length){
        return true;
    }
        
    return false;
}

let result7=Istrue(array3,array4);
console.log(result7);

//given two arrays check if one array can be formed by rearranging charecters in another array//
let str1="silent";
let str2="listen"
const canRearrange=(str1,str2)=>{
//check if the length are equal first //
if(str1.length !== str2.length){
 return false;
}

return str1.split('').sort().join('') === str2.split('').sort().join('')

}

let result8=canRearrange(str1,str2);
console.log(result8);

//write a logic to get unique objects from below array

let input=[{name:'sai'},{name:'nang'},{name:'sai'}];
//using filter and set //

const Uniquenames=(arr)=>{
    let seennames= new Set();
    return arr.filter((item)=>{
        
       if(!seennames.has(item.name)){
            seennames.add(item.name);
            return true;
        } 

    })

    return false;
}

let result10=Uniquenames(input);
console.log(result10);

//find largest amoung nested array //
const findLargestInNestedArray = (nestedArray) => {
    // Flatten the array and find the maximum
    return Math.max(...nestedArray.flat(Infinity));
};
const input1 = [1, [2, 3, [4, 5]], 6, [7, [8, 9, 10]]];
console.log(findLargestInNestedArray(input1))

//group anangrams javascript problems //


//first non reapeating charecter in a string 
const string = "swiss";

const FirstOcurrence=(string)=>{
    const obj={};
    for( let char of string){
       obj[char] = (obj[char] || 0)+1
    }
//eterating over obj using for in loop//

    for(let char in obj){
        if(obj[char] ===1){
            return char;
        }
    }
    return null;
}

let result12=FirstOcurrence(string);
console.log(result12);

//two array having comman element find them and place in another array //

let arr1=[1,2,3,4,6];
let arr2=[2,4,5,6,1,7,8];

const CommanElement=(arr1,arr2)=>{
    const common=[];
    for (let num in arr1){
        if(arr2.includes(arr1[num])){
            common.push(arr1[num])
        }
    }
    return common;
}

let result20=CommanElement(arr1,arr2);
console.log(result20);
//checking sum zero//
//find the first pair whoose sum is zero //

let arr4=[-5,-4,-3,-2,0,2,3,4,6];

const CheckSum=(arr4)=>{
//if array is not sorted then sort array first//
arr4.sort((a,b)=>a-b);
let left=0;
let right=arr4.length-1;
while(left < right){
    let sum=arr4[left] + arr4[right];
    if(sum == 0){
        return [arr4[left],arr4[right]]
    }else if( sum < 0){
        left++;
    }else{
        right--;
    }
}
return false;
}
let result15=CheckSum(arr4);
console.log(result15);

//string anangram//
let str01="listen";
let str02="ankiti";

const Anangram=(str01,str02)=>{
 if(str01.length !== str02.length){
    return false;
 }
 let str01sort=str01.split('').sort().join('');
 let str02sort=str02.split('').sort().join('');
 for(let i=0;i<str01sort.length;i++){
    if(str01sort[i] !==str02sort[i]){
        return 'given string is not anangram'
    }
 }
return 'given string is anangram'
}

let result21=Anangram(str01,str02);
console.log(result21);

//count unique number in array//
//using object //
let arr = [10, 20, 20, 10, 30, 10, 40];
const UniqueNumber=(arr)=>{
let count=0;
let frequency={};

arr.forEach((num)=>{
 frequency[num]=(frequency[num] || 0)+1;
})
for(let freq in frequency){
    if(frequency[freq] ===1){
        count++
    }
}
return count;
}
let result23=UniqueNumber(arr);
console.log(result23);



//check squares in one array into another array//

let array01=[1,2,3,4];
let array02=[1,9,4,16];

const CheckSquare=(array01,array02)=>{
let count=0;
const squaredArray = array01.map(value => value * value);
for (let i = 0; i < squaredArray.length; i++) {
    if (array02.includes(squaredArray[i])) {  
      count++;
    }
  }
  if(count === squaredArray.length){
    return true;
  }
  return false;
}
let result24=CheckSquare(array01,array02);
console.log(result24);

//largest sum of consecutive digits//

let demo_array=[1,2,3,4,3,5,4,6,7,8];
let num=4;

const LongestConsecutive=(demo_array,num)=>{
    let max=0;
    //logic to learn the outer loop//
    //array.length-num + 1;
    //first main check the condition for num //
    if( num > demo_array.length){
        throw Error('consecutive cant be calculated');
    }else{
       
    for(let i=0;i<=demo_array.length-num +1;i++){
        let tem=0;
     for(let j=0; j<num;j++){
       tem +=demo_array[i+j];
     }
     if(tem > max){
        max=tem;
     }

    }

   
}
return max;
}

let result30=LongestConsecutive(demo_array,num);
console.log(result30);

//longest non repaeting charecter in string //


//output:3// //abc

let s="abcabcbb";
const lengthOfLongestSubstring = (s) => {
    
    let maxLength = 0; 
    let start = 0; 
    let end=0;
    const myUniqueness = new Set();
//slidding window approach//
 while(end < s.length){
 if(!myUniqueness.has(s[end])){
    myUniqueness.add(s[end]);
    end++;
    maxLength=Math.max(maxLength,myUniqueness.size);
 }else{
   myUniqueness.delete(s[start]);
   start++;

 }

 }

return maxLength;
};

// Example Usage:
let result32=lengthOfLongestSubstring(s); // Output: 3 (substring: "abc")
console.log(result32);

//maximun occuring charecter in astring and return that charecter//


const MaxOccure=(s)=>{
const obj={};
let str_split=s.split('');
let Maxcount=0;
let maxword='';

str_split.forEach((char)=>{
 obj[char]=(obj[char] || 0)+1;
})
for(let ch in obj){
    if(obj[ch] > Maxcount){
    Maxcount=obj[ch];
    maxword=ch;
    }

}

return ` the maximum charecxter :${maxword}`;
}
let result35=MaxOccure(s);
console.log(result35);

//reverase string with o(n) //

let str_10='21waj';
//optimize solution//
const reverase=(str_10)=>{
 let reva=new Array(str_10.length);
 let n=reva.length;
 for(let i=0;i<str_10.length;i++){
    //reverse position of element in array//
    reva[n-1-i]=str_10[i];
 }
 return reva.join('');   
}

let result45=reverase(str_10);
console.log(result45);

const RotateArray = (nums, k) => {
    const n = nums.length;
    k = k % n; // Handle cases where k > n (wrap around)
    
    // Rotate using slicing
    const rotatedArray = [...nums.slice(-k), ...nums.slice(0, n - k)];
    return rotatedArray;
  };
  
  let nums = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  
  let result50 = RotateArray(nums, k);
  console.log(result50); 
  
  //find missing number in array using javascript//

  let array_mis=[1,2,3,4,6];
  const MissingNum=(array_mis)=>{
 //since a number is already missing length should be plus one//
  let n=array_mis.length +1;
  let sum=(n*(n+1))/2;
  let total=0;
  for(let i=0;i<array_mis.length;i++){
   total= total + array_mis[i];
  }
  let missing=sum-total;
  return missing;
  }

  let result51=MissingNum(array_mis);
  console.log(result51);
  //reverse only the letters//
 
