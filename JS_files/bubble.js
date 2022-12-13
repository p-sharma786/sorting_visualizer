// const { yellow } = require("@mui/material/colors");



document.getElementById("bubble").addEventListener("click",bubble_sort);
document.getElementById("new_array").addEventListener("click",newArray);
function swap(el1,el2)
    {
 
      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);
 
 
      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");
 
      el1.style.height = transform2;
      el2.style.height = transform1;
 
    }

var num = [];
function newArray (){

    document.getElementById("main").innerHTML = "";
    num = [...Array(100)].map(e=>~~(Math.random()*100));
    // num = [2,3,4,1,5];
    for (let i = 1; i <=100; i++)
    {
        const d = document.createElement("div");
        d.id = "d-"+i;
        d.classList.add("bar");
        
        document.getElementById("main").appendChild(d);
        d.style.color = 'white';
        d.style.height = num[i]*0.8+"vh";
        d.style.width = "5px";
    }

}

newArray();


 
// const ele = document.querySelectorAll(".bar")
function bubble_sort(){
    const ele = document.querySelectorAll(".bar")
    for(let i = ele.length-1; i >=0; i--)
    {
        
        for(let j = 0; j<i ; j++)
        {
            if (parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height))
                swap(ele[j],ele[j+1]);
            // console.log(ele[i].style.height);
        }
    //    console.log(ele[i]);
        
    
    }
}