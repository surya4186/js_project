const button=document.querySelectorAll(".btn");
const boxes=document.querySelectorAll(".box");
const searchBox=document.querySelector("#search");

searchBox.addEventListener('keyup',(e)=>{
    searchText=e.target.value.toLowerCase();
    boxes.forEach((box)=>{
        const data=box.dataset.item;
        console.log(data);
        if(data.includes(searchText)){
            box.style.display='block';
        }else{
            box.style.display='none';
        }
    });

});
