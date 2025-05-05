let obj={username:"Vrutti", password: 1234}
function f1(obj){
    console.log(obj)
}
f1=prompt("Enter username:")

for(x in obj){
    if(x=="username" && obj[x]==f1){
        console.log("Username found: ", obj.username)
    }
    else{
        console.log("Username not found")
    }
}
