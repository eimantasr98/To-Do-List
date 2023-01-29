window.addEventListener('load', () => {                      
    const form = document.querySelector('#task-form');
    const input = document.querySelector('#task-input');    

    storage = JSON.parse(localStorage.getItem('task')) || [];
    
    

    form.addEventListener('submit', (e) => {      
        e.preventDefault();         
        
        const task = input.value;       

        if(!task) {     
            alert('please add a task');      
            return;     
        } 

        const tasks = {
            content: e.target.elements.user.value,
        }
            
        storage.push(tasks);

        localStorage.setItem('task', JSON.stringify(storage));

        e.target.reset();


         displayTasks();
    })


        displayTasks();
        
        

})

function displayTasks() {
    const listEl = document.querySelector('#tasks');
    listEl.innerHTML = '';

    storage.forEach(tasks => {
        const taskElement = document.createElement('div');
                 taskElement.classList.add('task');

                 listEl.appendChild(taskElement);

                 const contentElement = document.createElement('div');
                 contentElement.classList.add('content');

                 taskElement.appendChild(contentElement);

                 const inputElement = document.createElement('input');
                 inputElement.classList.add('text');
                 inputElement.value = `${tasks.content}`;
                 inputElement.setAttribute('readonly', 'readonly');

                 contentElement.appendChild(inputElement);


                 const actionsElement = document.createElement('div');
                 actionsElement.classList.add('actions');

                 taskElement.appendChild(actionsElement);

                 const editBtn = document.createElement('button');
                 editBtn.classList.add('edit');
                 editBtn.innerText = 'Edit';

                 actionsElement.appendChild(editBtn);

                 editBtn.addEventListener('click', () => {
                    if (editBtn.innerText == 'EDIT') {
                        editBtn.innerText = 'Save';
                        inputElement.removeAttribute('readonly', 'readonly');
                        inputElement.focus();
                    } else {
                        inputElement.setAttribute('readonly', 'readonly');
                        editBtn.innerText = 'edit';
                        tasks.content = inputElement.value;
                        localStorage.setItem('task', JSON.stringify(storage));
                    }
                    
                 }) 

                 const deleteBtn = document.createElement('button');
                 deleteBtn.classList.add('delete');
                 deleteBtn.innerText = 'Delete';

                 actionsElement.appendChild(deleteBtn);

                 deleteBtn.addEventListener('click', () => {
                    storage = storage.filter(t => t != tasks);
                    localStorage.setItem('task', JSON.stringify(storage));
                    listEl.removeChild(taskElement);
                 }) 


    })
}


        


