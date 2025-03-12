
     // true
//console.log(isValid("()[]{}"));

function isValid(s){

let stack=[];
let pairs = { ')': '(', '[': ']', '{': '} ' };

for(let char of s){
    if(char === '(' || char === '[' || char ==='{'){
        stack.push(char)
    }else{
        console.log(char);
        if(stack.length == 0 || stack.pop() !== pairs[char] ){
            return false;
        }
    }
}
 return stack.length === 0;
}

console.log(isValid("{}"));   

let array = [[2,9],[3,4],56,[8,10]];

let flattern=array.reduce((acc,val)=>acc.concat(val),[]);
console.log(flattern);

//Longest Repeating Character Replacement//


// Test Cases
console.log(characterReplacement("AABABBA", 1)); // Output: 4
console.log(characterReplacement("ABAB", 2));    // Output: 4


//find all Find All Anagrams in a String //
