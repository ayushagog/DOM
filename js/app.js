const todo = document.querySelector('#todo');
const task_list = document.querySelector('.task-list');

function addtask(){
    if(todo.value.trim() === ''){
        alert('you must write something');
    }else{
        let li = document.createElement('li');
        li.innerText=todo.value;
        // li.classList.add('checked');
        task_list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
      
    }
    todo.value = '';
    savedata();
}


task_list.addEventListener('click', function(e){
    // console.log(e.target );

    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        savedata();
        
    } else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        savedata();
      
      

}})

function savedata(){
    localStorage.setItem ('data',task_list.innerHTML);
}

function showlist(){
    task_list.innerHTML = localStorage.getItem('data');
}

showlist();



todo.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addtask();
    }
});











