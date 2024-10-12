var addbutton=document.querySelector(".add-button")
var popupbg=document.querySelector(".popup-bg")
var popup=document.querySelector(".popup")
addbutton.addEventListener("click",function(){
    popupbg.style.display="block"
    popup.style.display="block"
})

var container=document.querySelector(".container")
var notes=document.querySelector(".notes")
var title=document.getElementById("addtitle")
var text=document.getElementById("addtext")
var add=document.querySelector(".add")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","notes")
    div.innerHTML=`<h2>${addtitle.value}</h2>
    <p>${addtext.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupbg.style.display="none"
    popup.style.display="none"   
    
})

var cancel=document.querySelector(".cancel")
cancel.addEventListener("click",function(){
    popupbg.style.display="none"
    popup.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}
