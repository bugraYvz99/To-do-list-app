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
    var li = document.createElement("input");
    li.classList.add("tasks")
    li.type = "text";
    li.value = userinput.value;
    li.setAttribute("readonly", "readonly");

    //BUTTONS
    var actions = document.createElement("div");
    actions.classList.add("actions");
    var edit_btn = document.createElement("button");
    var delete_btn = document.createElement("button");
    delete_btn.classList.add("dltbtn");
    edit_btn.classList.add("edtbtn");
    edit_btn.innerText = "EDİT";
    delete_btn.innerText = "DELETE";
    var icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash");
    delete_btn.appendChild(icon);
    actions.appendChild(edit_btn);
    actions.appendChild(delete_btn);


    //DELETE FUNCTİON

    delete_btn.onclick = function () {

        itemlist.removeChild(li);
        itemlist.removeChild(actions);
    }
    //EDİT FUNCTİON
    edit_btn.onclick = function (e) {
        if (edit_btn.innerText == "EDİT") {
            li.removeAttribute("readonly");
            li.focus();
            edit_btn.innerText = "SAVE";
        }
        else {
            li.setAttribute("readonly", "readonly");
            edit_btn.innerText = "EDİT"
        }


    }
    // İNPUT VALUE TO LİST
    var inputValue = userinput.value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    itemlist.appendChild(li);
    itemlist.appendChild(actions);





}

