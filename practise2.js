//reverse only charecters in a string//
let str_input="a1b!c";
const Reverse_string=(str_input)=>{
    let left=0;
    let arr=str_input.split('');
    let right=arr.length-1;
    while(left < right){
     if(!/[a-zA-Z]/.test(arr[left])){
      left++;
     }else if(!/[a-zA-Z]/.test(arr[right])){
      right--;
     }else{
     //destrucring//
      [arr[left] , arr[right]]=[arr[right],arr[left]]
      left++;
      right--;
     }
    }
    return arr.join('');
   }
 
   let result68=Reverse_string(str_input);
   console.log(result68);

 //print most occuring chrecters in a string //

   let str="javascript";

   const MostOccure=(str)=>{
    const Obj={};
    let maxcount=0;
    let maxchar='';
    for(let ch of str){
       Obj[ch]=(Obj[ch] || 0)+1;


    }
    for (char in Obj){
        if(Obj[char] > maxcount){
            maxcount=Obj[char];
            maxchar=char;
        }
    }
    return maxchar;
   }

   let result=MostOccure(str);
   console.log(result);

   //kedane algorithim maximun subrray //
   //check if the array is sorted //
   const isSortedAscending = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
     if(arr[i] > arr[i+1])return false;
    }
    return true;
};

//maximun  product of two element //
let array=[1,5,3,4,2];

const MaximunProduct=(array)=>{
array.sort((a,b)=>b-a);
return array[0] * array[1];

}

let result4=MaximunProduct(array);
console.log(result4);


let array1=[7,7,8,8,9,1,1,4,2,2];
//remove duplicate element that occure only once//
const Unique=(array1)=>{
const Uniquearray=[];
for(let i=0;i<array1.length;i++){
    if(Uniquearray.indexOf(array1[i]) === -1 ){
        Uniquearray.push(array1[i]);
    }
}
return Uniquearray;
}

const result6=Unique(array1);
console.log(result6);

//unique element whose count is only one//
const Uniqueelement=(array1)=>{
    const obj={};
   
    let uniqueelement=[];
    
    array1.forEach((num)=>{
     obj[num]=(obj[num] || 0)+1;
    })
    for(let element in obj){
        if(obj[element] === 1){
           uniqueelement.push(element)
        }
    
    }
    
    return ` unique elements :${uniqueelement}`;
    }

   let result30= Uniqueelement(array1);
   console.log(result30)
   //second largest element in array //
   array2=[3,2,3,3];
   //output:null//

   function secondlargest(array2){
    let largest=-Infinity;
    if(array2.length < 2){
        return null;
    }
    let secondlargest=-Infinity;
    for(let i=0;i<array2.length;i++){
        if(array2[i] > largest){
            secondlargest=largest;
            largest=array2[i];
        }else{
            if(array2[i] > secondlargest && array2[i]!== largest){
                secondlargest=array2[i];
            }
        }
    }
      return secondlargest == -Infinity ? null:secondlargest;
   }

   let result38=secondlargest(array2);
   console.log(result38);
   //group anangram //
   const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

   function groupanangram(words){
    const map=new Map();
    words.forEach(word=>{
    const sortword=word.split('').sort().join("");
     if(!map.has(sortword)){
        map.set(sortword,[])
     }
     map.get(sortword).push(word);
    })
    return Array.from(map.values());
   }

   let result5=groupanangram(words);
   console.log(result5);


   function makeAnagram(str1, str2) {
    let freqMap = {};

   
    for (let char of str1) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }


    for (let char of str2) {
        freqMap[char] = (freqMap[char] || 0) - 1;
    }

   
    let removals = 0;
    for (let char in freqMap) {
        removals += Math.abs(freqMap[char]); 
    }

    return removals;
}

// Example Usage
console.log(makeAnagram("abc", "cde")); // Output: 4 (remove 'a' and 'b', add 'd' and 'e')
console.log(makeAnagram("hello", "billion")); // Output: 6 (remove 'h', 'e', 'l' from "hello" and add 'b', 'i', 'n', 'o')
//two sum problem //
let nums = [3,2,4]; 
const target=6;


const Twosum=(target,nums)=>{
let requirednum=0;
let map=new Map();
for(let i=0;i<nums.length;i++){
    requirednum=target-nums[i];
    if(!map.has(requirednum)){
        map.set(requirednum,i)
    }
 
}
return map;

}

let result35=Twosum(target,sum);
console.log(result35);