let stars=document.getElementsByClassName('star');
// console.log(stars);
stars=Array.from(stars);
for(let i=0;i<stars.length;++i){
    stars[i].addEventListener('click',()=>{
        for (let j = 0; j < stars.length; j++) {
            if(i>=j){
                stars[j].classList.add('active');
                stars[j].classList.remove('star');
            }else{
                stars[j].classList.remove('active');
                stars[j].classList.add('star');
            }
        }
    })
}

function reportData(x){
    document.getElementById('reportbtn').value=x;
    document.getElementById('reportbtn').innerHTML="REPORT "+x;
}

function getData(){
    let candidateName=document.getElementById('candidateName').innerHTML;
    let candidateReply=document.getElementById('textarea').value;
    let rating=document.getElementsByClassName('active').length;
    let reportData=document.getElementById('reportbtn').value;
    res={name:candidateName,candidateReply:candidateReply,rating:rating,reportData:reportData}

    console.log(res);
}



