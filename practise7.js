//find second largest element in array //

let array=[1,2,4,5,7,5];
function SecondLargest(array){
    let largest = -Infinity;
    let second= -Infinity;
for(let num of array){
    if(num > largest){
        second=largest;
        largest=num;
    }else if
    (num > second && num !=largest){
            second=num;
       
    }
}
return second
}

let result=SecondLargest(array);
console.log(result);

//valid parenthesis //
function isValid(s) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
         if(char === '(' || char == '{' || char =='['){
            stack.push(char);
         }
          else {
           if(stack.length === 0 || stack.pop() !== pairs[char]){
            return false;
           }
        }
    }

    return stack.length === 0;

}

// 🔹 Test cases
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
    // true
