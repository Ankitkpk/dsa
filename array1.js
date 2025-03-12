//mearge two sorted array //

const array1=[1,2,3,4];
const array2=[5,6];
function mergeArray(array1,array2){
let mergearray=[];
let i = 0;
let j =0;

while(i < array1.length && j < array2.length){
  if(array1[i] < array2[j]){
    mergearray.push(array1[i]);
    i++;
    console.log(i);
  }else
  {
    mergearray.push(array2[j]);
    j++;
  }

}

while( i < array1.length){
    mergearray.push(array1[i])
    i++;
}

while(j < array2.length){
    mergearray.push(array2[j])
    j++;
}

return mergearray;
}
let result=mergeArray(array1,array2);
console.log(result);