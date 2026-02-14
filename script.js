function addWish(){
  let name=document.getElementById("fname").value;
  let msg=document.getElementById("fmsg").value;
  if(name && msg){
    let li=document.createElement("li");
    li.innerHTML=`💌 <b>${name}:</b> ${msg}`;
    document.getElementById("wishList").appendChild(li);
    fname.value="";
    fmsg.value="";
  }
}
