async function myFunction() {
    return 8+2
}
myFunction().then(
    function(value){ console.log(value)},
    function(error){ console.log(error)}
)


async function myfunc(){
    let pro=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("hello this is good")
            console.log("hello world")
        },2000)
    });
    let result=await pro;
    console.log(result)
}
myfunc().then(
    function (value){console.log(value);},
    function(error){console.log(value);}
)




function fetchData(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({data: "This is fetched data"})
        },2000)
    })
}
async function processData() {
    try{
        console.log("Fetching data...")
        const result=await fetchData();
        console.log("Data fetched: ",result.data)
        return result.data
    }
    catch(error){
        console.error("Error fetching data: ",error)
        throw error;
    }
}
processData()
    .then(value=>{
        console.log("Processed data: ",value)
    })
    .catch(error=>{
        console.error("Final error: ",error)
    })