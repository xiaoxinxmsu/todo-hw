let inputElem = document.querySelector('input');
let formElem = document.querySelector('form');
let listElem = document.querySelector('ul');
let totalTasksElem = document.querySelector('#total-tasks');

let taskList = [
    'Buy groceries',
    'hair cut'
]

function deleteItem(e){
    let task = e.target.parentElement.firstChild.innerHTML;
    console.log(task)
    let index = taskList.indexOf(task);
    if (index !== -1){
        taskList.splice(index,1);
    }
    populateList();
}

function populateList(){
    listElem.innerHTML="";
    taskList.forEach(function(item){
        let newItem = document.createElement('li');
        let span=document.createElement('span');
        span.classList.add('todo-span');
        span.innerHTML=item;
        newItem.appendChild(span);

        //delete
        let anchorElem = document.createElement('button')
        anchorElem.classList.add('delete');
        anchorElem.innerHTML= "delete";
        newItem.appendChild(anchorElem);

        anchorElem.addEventListener('click', (e)=>deleteItem(e));
        //add li to ul
        listElem.appendChild(newItem)
    });
    totalTasksElem.innerHTML=taskList.length;
    inputElem.value="";
}
populateList();
function addTask(){
if (inputElem.value){
    taskList.push((inputElem.value));
    populateList();
}
}
formElem.addEventListener('submit',function(e){
    e.preventDefault();
    addTask();
});