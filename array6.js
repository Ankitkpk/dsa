let str = ["flower","flow","flight"]
//Output: "fl"

function CommonPrefix(str){
 if(str.length ==0){
    return false;
 }
 let prefix=str[0];
 for(let i= 1;i<str.length;i++){
    while (!str[i].startsWith(prefix)) { 
        prefix = prefix.substring(0, prefix.length - 1); 
        if (prefix === "") return "No common prefix";
    }
 }
 return `the longest common prefix ${prefix}`
}

let result24=CommonPrefix(str);
console.log(result24);
