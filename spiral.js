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