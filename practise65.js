//remove element 
/*let array=[10,20,30,12,19,92];
let val=30;
function Removeelement(val){
let index=array.indexOf(val);
  if(index !== -1){
    array.splice(index,1);
  }
return array;
}

let result=Removeelement(val);
console.log(result);

//kadane algorithim //
*/
function FindMaximunSubArray(arr){
let maxsum=arr[0];
let currentSum=arr[0];

for(let i = 1;i<arr.length;i++){
  currentSum=Math.max(arr[i] , currentSum + arr[i]);
  maxsum=Math.max(maxsum,currentSum);
}
return maxsum;
}

let result10=FindMaximunSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result10);

//longest substring without repeating charectets//


