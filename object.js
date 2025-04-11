//objects in javascript //

const user={
 name:"roadside coder",
 age:25,
 "like this property":true
}
//delete value from object//
console.log(user["like this property"]);
delete user.age;
console.log(user);

const func=(function(a){
  delete a
  return a
}(5));

//delete is only use to delete properties  inside objects and not local variable//
//how to add dynamic key value pairs to the object //
const property="first name";
//const name="ankit karapurkar";
const Object={
 //[property]:name
}
console.log(Object);

const user1={
    name:"roadside coder",
    age:25,
    isTotally:true
   }
//lope through and print key value in objects//
for(let key in user1){
    console.log(user1[key]);
}

const obj={
    a:"one",
    b:"two",
    a:"three"
}

console.log(obj);
//output:{a:'three' , b:'two'}
//when the objects have same key one key is replace and it will at first position with last ocupied value //



//create a function MuiltiplyTwo() which will multiply all the numeric values with two //

const nums={
    a:100,
    b:200,
    title:"my nums"
}

for(let key in nums){
    if(typeof nums[key] === 'number'){
        nums[key]=nums[key]*2;
    }
}

console.log(nums);

//what will be output of the following code //

const a={};
const b={key:'b'};
//const c={key:'c'};

a[b]=123;
//a[c]=456;

console.log(a[b]);
//output//
console.log(a);
//{ '[object Object]': 456 }//

//diference between json. parse and json.string//

//spread operator//

const user3={name:"lydia"  , age:28};
const admin={admin:true , ...user3};

console.log(admin);

//object destructuring//
//destrucring nested object nested destructuring//
const user4={
    name:"ankit karapurkar",
    age:24,
    fullName:{
      first:"ankit",
        last:"karapurkar"
    }
}

//nested destructuring//
const {fullName:{first}}=user4;
const {fullName:{last}}=user4;

console.log(first);
console.log(last);

//difference between spread operator and rest operator//
//object referencing//
let c={greeting:"hey!"};
let d;
//whenerver we assign one object to another we simply provide the referece of one object to  another in this case d will have the reference of  c //
d=c;
c.gretting="hello";
console.log(d.greeting);
//output: hello//