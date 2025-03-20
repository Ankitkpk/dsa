function spiralOder(matrix)
{    

    if(matrix.length ===0)return false;
    let result=[];
    let top=0;
    let bottom=matrix.length-1;
    let left=0;
    let right=matrix[0].length-1;

    while(top <= bottom && left <=right){
   //traverse from left to right in top boundary//
     for(let col=left ;col<=right;col++){
        result.push(matrix[top][col])
     }
     top++;
     //travserse vertical from top to bottom along right boundary//
     for(let row=top; row<=bottom;row++){

        result.push(matrix[row][right])
     }
     right--;
     //right to lelft from bottom (if valid)//
     if(top<=bottom){
     for(let col=right;col>=left;col--){
        result.push(matrix[bottom][col])
     }
     bottom--;
    //traverse from bottom to top if(valid)//
    if(right>=left){
      for(let row=bottom;row>=top;row--){
        result.push(matrix[row][left])
      }
      left++;

    }

     }
    }
return result;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let result1= spiralOder(matrix );
console.log(result1);

//square of sorted array//

let nums = [-4,-1,0,3,10];

function squareSorted(nums){
    const squaredNumbers = nums.map(num => num * num);
    squaredNumbers.sort((a,b)=>a-b);
    return squaredNumbers;
    }
let result=squareSorted(nums);
console.log(result);
//sliding windows pattern//
let nums1 = [1,2,3,1,2,3];
let k = 2;

function checkDuplicate(nums1, k) {
    let set = new Set();
    for (let i = 0; i < nums1.length; i++) {
        if (set.has(nums1[i])) {
            return true;
        }
        set.add(nums1[i]);
        if(set.size > k){
            set.delete(nums1[i-k]);

        }
        
    }
    return false;
}
let result7=checkDuplicate(nums1,k);
console.log(result7);

//minimun size subray sum//
let target = 7;
let array9 = [2,3,1,2,4,3];


function minSubrray(array9,target){
    let left=0;
    let sum=0;
    let minwindow=Infinity;
    for(let right=0;right<array9.length;right++){
        sum+=array9[right];
   //till your sum is greator then or equal to target reduce the window//
        while(sum>=target){
         minwindow=Math.min(minwindow,right - left + 1);
         sum-=array9[left];
         left++;
        }
        
        
    };
    return minwindow === Infinity ? 0 :minwindow;
}
let result15=minSubrray(array9,target);
console.log(result15);

let array10=[4,1,2,1,2];

function SingleNumber(array10){
    let result=0;
    for(let num of array10){
        result^=num;
    }
    
    return result;
}
let result20=SingleNumber(array10);
console.log(result20);

//remove duplicate from sorted array//
let array12 = [0,0,1,1,1,2,2,3,3,4];
//Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
  // [0,1,1,1,2,2,3,3,4];
function removeDuplicate(array12){
for(let i=1;i<array12.length;i++){
    if(array12[i] === array12[i-1]){
        array12.splice(i, 1);
        i--;
     console.log(i);
    }
}
return array12;
}

let result22=removeDuplicate(array12);
console.log(result22);

//Input: nums = [1,1,1,2,2,3], k = 2
//Output: [1,2]

//most k frequency number leetcode //

//remove element from arrays//
 
let array16 = [3,2,2,3];
let val = 3;

function RemoveVal(array16,val){
    let left=0;
    for(let right=0;right<array16.length;right++){
        if(array16[right] !== val){
         array16[left]= array16[right];
         left++;
        }
       
    }
return left;
}

let result10=RemoveVal(array16,val);
console.log(result10);