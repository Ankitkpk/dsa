//this keyword depend on the context it is used in //

//incase of normal function //
this.a=5;

function Getparams(){
    console.log(this.a);
}

Getparams();

//output:5
//window object//


//incase of objects//





//call() ,apply() bind()


let name={
  firstname:"ankit",
  lastname:"saini",
   

}
let getDetailes=function(hometown ,state){
    console.log(this.firstname+ " " + this.lastname  +  " from" + hometown + "and"+ state);
  }


let name2={
    firstname:"sachin",
    lastname:"tendulkar"
}
//function borroying
//call
getDetailes.call(name ,"Dehradun" , "uttrakhand");
getDetailes.call(name2 ,"mumbhai" , "maharastra");

getDetailes.apply(name2,["mumbhai" , "maharastra"]);

//bind method//

let printName=getDetailes.bind(name2 ,"mumbhai" , "maharastra" );
printName();


let s = "tree";
//Output: "eert"

function ArrangeFrequency(s)
{
  let Obj={};
  for(char of s){
    Obj[char]=(Obj[char] || 0) +1
  }
  const entriesArray = Object.entries(Obj);
  entriesArray.sort((a, b) => b[1] - a[1]);
  let result='';
  for(let [char , freq] of entriesArray){
    result +=char.repeat(freq);
  }

  return result;
}
let result3=ArrangeFrequency(s);
console.log(result3);

//contains duplicate //
//leetcode Input: nums = [1,2,3,1]

//Output: true
let nums = [1,2,3,1];
function ContainsDuplicate(nums){
let map=new Map;
for(let i=0; i<nums.length; i++){
  if(map.has(nums[i])){
    return true
  }
  map.set(nums[i]);
}
return false;;
}


let result7=ContainsDuplicate(nums);
console.log(result7);