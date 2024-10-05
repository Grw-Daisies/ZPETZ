function addTask()
{
    var newItem = document.createElement("h3");
    newItem.innerHTML = document.getElementById("box").value;

    newItem.onclick = deleteItem;
    document.getElementById("list").appendChild(newItem);

    document.getElementById("box").value = "";
}

function deleteItem()
{
    document.getElementById("list").removeChild(this)
}

function Task()
{
    var taskPanel = document.querySelector(".task_panel");

    if (taskPanel.style.display === "none" || taskPanel.style.display === "")
    {
        taskPanel.style.display = "block";
        doctorPanel.style.display = "none";
        staticPanel.style.display = "none";
        infoPanel.style.display = "none";
    }
    else
    {
        taskPanel.style.display = "none";
    }
}

function Info()
{
    var infoPanel = document.querySelector(".info_panel");

    if (infoPanel.style.display === "none" || infoPanel.style.display === "")
    {
        infoPanel.style.display = "block";
        doctorPanel.style.display = "none";
        staticPanel.style.display = "none";
        taskPanel.style.display = "none";
    }
    else
    {
        infoPanel.style.display = "none";
    }
}

function Doctor()
{
    var doctorPanel = document.querySelector(".doctor_panel");

    if (doctorPanel.style.display === "none" || doctorPanel.style.display === "")
    {
        doctorPanel.style.display = "block";
        infoPanel.style.display = "none";
        staticPanel.style.display = "none";
        taskPanel.style.display = "none";
    }
    else
    {
        doctorPanel.style.display = "none";
    }
}

function Static()
{
    var staticPanel = document.querySelector(".static_panel");

    if (staticPanel.style.display === "none" || staticPanel.style.display === "")
    {
        staticPanel.style.display = "block";
        doctorPanel.style.display = "none";
        infoPanel.style.display = "none";
        taskPanel.style.display = "none";
    }
    else
    {
        staticPanel.style.display = "none";
    }
}

var acc = document.getElementsByClassName("accordeon");

for( var i=0; i< acc.length; i++)
{
    acc[i].addEventListener("click", function(){
        this.classList.toggle("accordeon-active");

        var acc_panel = this.nextElementSibling;

        if(acc_panel.style.display === "block"){
            acc_panel.style.display = "none";
        }
        else{
            acc_panel.style.display = "block";
        }
    });
}

function Login()
{
    alert("Успешный вход в акаунт!");
}

function Reg()
{
    alert("Код отправлен. Ожидайте письмо. После получения подтвердите свою почту и войдите в акаунт.");
}

function Save()
{
    alert("Данные о питомце сохранены.");
}