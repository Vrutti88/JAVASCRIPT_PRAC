count=0;
function increment(){
    count++;
    document.getElementById('countValue').innerHTML=`Counter Value :- ${count}`;
}
function decrement(){
    count--;
    document.getElementById('countValue').innerHTML=`Counter Value :- ${count}`;

}
function reset(){
    count=0;
    document.getElementById('countValue').innerHTML=`Counter Value :- ${count}`;


}