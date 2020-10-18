
var tasks=[]


document.getElementById('button').addEventListener('click',function(){
    addTask()
    checkStatus()
    updateOutput()
})

function emptyEntryAlert(){
    alert("Please write a task in the inputfield")
}


function addTask(){
    var inputfield = document.getElementById('inputfield').value

    if (inputfield.length === 0){
        emptyEntryAlert()
    }else{

        //save unordered list in variabel
        var list = document.getElementById('tasklist')
        

        //create a <li> tag
        var node = document.createElement("li")
        

        //create <input> tag
        var input = document.createElement("input")

        //set type and float the checkbox to the left
        input.type = "checkbox"
        input.style.float = "left"
        
        node.innerHTML = inputfield
        
        

        //append input to node
        node.appendChild(input)
        tasks.push(createTaskObject(node))
        
        //new nodes/list elements are pushed on top
        list.insertBefore(node, list.childNodes[0])
    }
}

function createTaskObject(task){
    var taskObj={
        name: task.innerText,
        date: Date.now()
    };
    return taskObj
}

function checkStatus(){
    var labels = document.querySelectorAll("li")
    for(var i = 0; i < labels.length; i++){

        labels[i].addEventListener('change',function(){

            if(this.childNodes[1].checked){
                this.style.textDecoration = "line-through"


            }else if (!this.childNodes[1].checked){
                this.style.textDecoration = "none"


            }
            updateOutput()
        })   
    }
    
}


function numChecked(){
    var checked = document.querySelectorAll('input[type="checkbox"]:checked')
    return checked.length

}


function updateOutput(){
    var output = document.getElementById('out')
    var txt = numChecked() + '/' + tasks.length
    output.innerText = txt
}


