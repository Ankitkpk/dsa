//merge two sorted array//


function mergeSortedArrays(array1,array2){
let mergeArray=[];
let i=0;
let j=0;
while(i < array1.length &&  j < array2.length){
    if(array1[i]<array2[j]){
        mergeArray.push(array1[i]);
        i++;
    }else{
        mergeArray.push(array2[j])
        j++;
    }
    
}
i++;
j++;
return mergeArray;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

//find missing number in array//


function missingNumber(array){
let n=array.length + 1;
let espectedsum=(n*(n+1))/2;
let total=0;
for(let i=0 ;i<array.length;i++){
  total=total + array[i];
}

return` the missing number in above array is ${espectedsum-total}`;

}

console.log(missingNumber([1, 2, 4, 5, 6]));

//check if string is palindrome//

function isPalindrome(str){
  let rev=str.split('').reverse().join("");
  console.log(rev);
  if(str === rev){
    return true
  }
  return false;
}
console.log(isPalindrome("ankit")); // Output: true
console.log(isPalindrome("mom")); 

//find largest element in array//
function Largest(array){
    array.sort((a,b)=>b-a);
    return array[0];
}

let result2=Largest([2,8,20,35,6]);
console.log(result2);

//FizzBuzz: Print numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both 3 and 5, print "FizzBuzz".//
/*
function FizzBuzz(n){
 for(let i=1;i<=n;i++){
    if( i % 3 == 0 && i % 5 == 0 ){
        console.log("fizzBuzz");
    }else if( i % 3 == 0){
     console.log("fizz")
    }else if(i % 5 == 0){
        console.log("buzz")
    }
 else{
    console.log(i)
 }

 }
}

let result6=FizzBuzz(100);
console.log(result6);
  */
//factorial of number using recursion //
function factorial(n){
    if( n === 0  || n === 1){
        return 1;
    }
 return n* factorial(n-1);
}
let result10=factorial(5);
console.log(result10);
//factorial using literation//
 
//check if number is prime //

function Prime(n){
if( n % 1 == 0  && n % n ==0 ){
    return true
}
return `given number is not prime number`
}

let result16=Prime(4);
console.log(result16);

function SwapNumber(a,b){
  console.log(`value of a is ${a}`);
  console.log(`value of b is ${b}`);
  a=b+a;
  b=a-b
  a=a-b
return [a,b]
}

console.log(SwapNumber(4,5));

//count vovwels and consonant //
function countVowelsConsonant(str){
  let vovwels="aeiouAEIOU";
  let vowelscount=0;
  let consonentscount=0;
  for(let char of str){
    if(vovwels.includes(char)){
        vowelscount ++;
    }else{
        consonentscount++;
    }
  }
 return `vowels count is ${vowelscount} and consonentscount ${consonentscount}`
}
let result19=countVowelsConsonant("Hello World!");
console.log(result19);

//check if given number is amstrong number //
//153//
function Amstrong(num){
let str="647";
let n=str.length;
let amstrong=0;
for(let digits of str){
   amstrong+=Math.pow(Number(digits),n)
  console.log(digits);
}
return amstrong === num;

}

let result12=Amstrong(153);
console.log(result12);

//intermidate level //
let array3=[1,2,34,5,67,3,2,4,6,83,2,4];

function RemoveDuplicates(array3){
const unique=[];
for(let num of array3){
    if(!unique.includes(num)){
        unique.push(num);
    }
}
return unique;
}
let result30=RemoveDuplicates(array3);
console.log(result30);

//check anangram of //
let str1="silent";
let str2="lisent";
//find first non repaeting charecters in string //
let string="hellowewot";

function NonRepaeting(string){
const Obj={};


for(let char of string){
    Obj[char]=(Obj[char] || 0)+1;
};
for(let freq in Obj){
    if( Obj[freq] === 1){
    return freq
    }
}
return null;

}

let result31=NonRepaeting(string);
console.log(result31);

//remove duplicates from a string//
function removeDuplicate(string){
    const Obj={};
    let uniqueword='';
    
    for(let char of string){
        Obj[char]=(Obj[char] || 0)+1;
    };
    for(let freq in Obj){
        if( Obj[freq] === 1){
            uniqueword+=freq;
        }
    }
    return uniqueword;
    
    }
    
    let result32=removeDuplicate(string);
    console.log(result32);

