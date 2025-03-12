function LongestSubstringwithoutReapaeting(str){
    let left=0;
     let set=new Set();
     let maxlength=0;
     for(let right=0;  right <str.length;right++){
        while(set.has(str[right])){
             set.delete(str[left])
                left++;
            }
            set.add(str[right])
            maxlength=Math.max(maxlength ,right-left + 1);
        }
        return maxlength;
     }
     
     
let result=LongestSubstringwithoutReapaeting("abcabcbb");
console.log(result);

let array=[1,[2],[3,4],[[5]]];

/*let deepFlat = (arr) => arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(deepFlat(val)) : acc.concat(val), []);

console.log(deepFlat(array2)); */     
                                         //if nested array go use recursion otherwise go only one level deep               
let deepFlat=(array)=>array.reduce((acc,val)=>Array.isArray(val) ? acc.concat(deepFlat(val)): acc.concat(val),[]);

console.log(deepFlat(array));
//longest consecutive number range//

let array2= [1, 9, 3, 10, 4, 20, 2];

function LongestConsecutiveRange(array2){
    array2.sort((a,b)=>a-b);
    let count=0;
    let range=0;
    for(let i =0; i < array2.length;i++){
        if(array2[i] === array2[1+i]){
            count ++;
        }
        if(count > range){
         range == count;
        }
    }
    return range;
}

let test=LongestConsecutiveRange(array2);
console.log(test);

//kadane alogorithim//
function maxSubarraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0]; 

    for (let i = 1; i < arr.length; i++) {

        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}


const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(nums)); 

console.log(this);

const Obj={
    name:"yoshida",
    lastname:"jain",
    fullname:function(){
        return this;
    }
}

console.log(Obj.fullname());

//inside function //
//since the function is not inside object it refers to window object //
function xyz(){
    return this;
}

console.log(xyz());

//group anangrams 

let strs = ["eat","tea","tan","ate","nat","bat"];

function groupAnangram(strs){
let map=new Map();
strs.forEach(word => {
const sortedword=word.split("").sort().join("");
if(!map.has(sortedword)){
   map.set(sortedword,[]);
}
map.get(sortedword).push(word);

});
return Array.from(map);
}
let result5=groupAnangram(strs);
console.log(result5);


//rotate array dsa questions//
let array7 = [-1,-100,3,99], k = 2
//Output: [5,6,7,1,2,3,4]

function rotateArray(array7,k){

let n =array7.length;
if( k > n){
    k=k % n;
}
let revarray=array7.slice(-k);
return [...revarray.slice(-k),...array7.splice(0,n-k)]

}

let result12=rotateArray(array7,k);
console.log(result12);

