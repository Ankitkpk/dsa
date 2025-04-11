/* let a =true;

setTimeout(function() {
   a=false;
}, 2000);

while(a){
    console.log("hello");
}
*/
//while loop will run continuouly because javascript is single threded while condition is running on main thread their is no stop condition fo while condition setTimeout wants to run main on thread but its i busy processing the while loop thats y its run continously//
 // setInterval Boilerplate
 


 let c=0;
/*

let a=true;
setTimeout(function() {
    a=false;
 }, 2000);

 setInterval(() => {
    if(a){
    console.log(c++);
    }
}, 200); 

*/
// want free the cursor stop programe after 2 miliesecond// 


const id=setInterval(() => {
    console.log(c++);
}, 200); 

setTimeout(function() {
 clearInterval(id);
 }, 2000);

