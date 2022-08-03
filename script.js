document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        
        windowKeyEnterPressed();
        userinput.value = "";
    }
   
}, false);

const userinput = document.querySelector("#user-input");
const itemlist = document.querySelector(".items");



function windowKeyEnterPressed() {
    //CREATE LİST
    var li = document.createElement("li");
    li.classList.add("tasks")
    //BUTTONS
    var edit_btn = document.createElement("button");
    var delete_btn = document.createElement("button");
    delete_btn.classList.add("dltbtn");
    edit_btn.classList.add("edtbtn");
    edit_btn.innerText = "EDİT";
    delete_btn.innerText = "DELETE";
    //DELETE FUNCTİON
    
    delete_btn.onclick = function (){
        
        itemlist.removeChild(li);
    }
    //EDİT FUNCTİON
    edit_btn.onclick = function(e){
       let selectedLi = e.path[1];
       console.log
       var inputValue = userinput.value;
       userinput.value = "";
        selectedLi.innerHTML = inputValue
        selectedLi.appendChild(delete_btn);
        selectedLi.appendChild(edit_btn);
    }
    // İNPUT VALUE TO LİST
    var inputValue = userinput.value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.appendChild(delete_btn);
    li.appendChild(edit_btn);
    itemlist.appendChild(li);
    
    
    
    
}

