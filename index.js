let stars=document.getElementsByClassName('star');
console.log(stars);
stars.forEach((item,index1)=>{
    item.addEventListener('click',()=>{
        stars.forEach((star,index2)=>{
            index1>index2?star.classList.add('active'):"";
        })
    })
})