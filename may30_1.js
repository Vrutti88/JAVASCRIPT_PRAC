
function generateLorem(){
    const words=["Lorem","ipsum","dolor","sit","amet","consectetur","adipisicing","elit","Vitae","tempore","aut","aliquid","dolores","in","culpa","modi","corporis","eius","delectus?","Itaque","eaque","facere","labore","id","dolores","quia","aut","excepturi","minus","cum?"];
    const what=document.getElementById('what').value;
    const num=parseInt(document.getElementById('num').value);
    const output=document.getElementById('output');

    let result=''
    if(what==='words'){
        for(let i=0;i<num;i++){
            result+=words[Math.floor(Math.random()*words.length)]+' ';
        }
    }

    if(what==='sentences'){
        for(let j=0;j<num;j++){
            let sentence='';
            const length=Math.floor(Math.random()*8)+4;
            for(let i=0;i<length;i++){
                sentence+=words[Math.floor(Math.random()*words.length)]+' ';
            }
            result+=sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1) + '. ';
        }
    }

    if(what==='paragraphs'){
        for(let k=0;k<num;k++){
            let para='';
            const numPara=Math.floor(Math.random()*4)+4;
            for(let j=0;j<numPara;j++){
                let sentence='';
                const length=Math.floor(Math.random()*8)+4;
                for(let i=0;i<length;i++){
                    sentence+=words[Math.floor(Math.random()*words.length)]+' ';
                }
                para += sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1) + '. ';
            }
            result += `<p>${para}</p>`;
        }
    }
    output.innerHTML=result;
}

