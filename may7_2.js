for(let i=0; i<7;i++){
    console.log("* ".repeat(i))
}


// let r=6;
// for(let i=0;i<;i++){

// }


function myDisplayer(some){
    console.log(some)
}

let myPromise=new Promise(function(myResolve, myReject){
    let x=0;
    if(x==0){
        myResolve("OK")
    }
    else{
        myReject("Error")
    }
})
myPromise.then(
    function(value){ myDisplayer(value)},
    function(error){ myDisplayer(error)}
)




function func(num){
    console.log(num)
}

let myPromise2=new Promise(function(myRes, myRej){
    let x=10;
    if(x==0){
        myRes("ZERO")
    }
    else if(x>0){
        myRes("+")
    }
    else{
        myRej("-")

    }
})
myPromise2.then(
    function(value){ myDisplayer(value)},
    function(error){ myDisplayer(error)}
)