function add(){
    let n1=document.getElementById("num1").value
    let n2=document.getElementById("num2").value
    let sum=n1+n2;
    document.getElementById("result").innerText="Sum: "+sum;
    return false
}