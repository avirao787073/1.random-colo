var color="rgb(188,55,144)"
var node=document.createElement('P');
var textnode=document.createTextNode(color);
node.appendChild(textnode);
const my=()=>{
    
    var r=document.getElementById('random1');
    r.style.backgroundColor=color;
   
    r.appendChild(node);

}


document.getElementById("addEventListener").addEventListener("click",function(){
    document.getElementById('random2').style.color="red";
    console.log("ssdd")
})



function addEventListenerss(){
    var randomColor,x,y,z;
    x=Math.round(Math.random()*256);
    y=Math.round(Math.random()*256);
    z=Math.round(Math.random()*256);
    randomColor="rgb("+x+","+y+","+z+")";
   var y= document.getElementById("random3");
   y.style.backgroundColor=randomColor;
//    y.innerHTML="<p>"+randomColor+"</p>";
}