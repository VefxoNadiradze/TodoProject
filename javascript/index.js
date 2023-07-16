let input = document.querySelector('.input');
let btn = document.querySelector('.addBtn');
let todo = document.querySelector('.todo')

let todoClearBtn = document.querySelector('.TodoClear')
let clearINput = document.querySelector('.clearINput')
let inputDiv = document.querySelector('.inputDiv')

btn.setAttribute('disabled', 'disabled')

btn.addEventListener('click', ()=>{
    let todoList = document.createElement('div');
    todo.appendChild(todoList);
    todoList.classList.add('todoList');
    
    //listis gamochenis animacia 
    todoList.classList.add('todoOn')
    ///////////////////

    let todoText = document.createElement('p');
    todoList.appendChild(todoText);
    todoText.classList.add('todoText');
    todoText.innerHTML = input.value

    let BtnsPar = document.createElement('div');
    todoList.appendChild(BtnsPar);
    BtnsPar.classList.add('BtnsPar')

    
    let deleteBtn = document.createElement('button');
    BtnsPar.appendChild(deleteBtn);
    deleteBtn.innerHTML = ' <i class="fa-solid fa-trash"></i> '
    
    //  listis washlis animacia
    deleteBtn.addEventListener('click', ()=>{
        todoList.classList.add('todolistoff')
        todoList.classList.remove('todoOn')

        setTimeout(() => {
            todo.removeChild(todoList)
        }, 200);

        if(todo.children.length - 1 <  1){
            todoClearBtn.style.display = 'none'
        }
        
    })
    ////////////


    /// teqstis gadaxazvis funqcia
    let checkBtn = document.createElement('button');
    checkBtn.classList.add('checkBtn')
    BtnsPar.appendChild(checkBtn);
    checkBtn.innerHTML = ' '

    checkBtn.addEventListener('click', ()=>{
        todoText.classList.toggle('Checktext')
        
        if(checkBtn.innerHTML == ' '){
            checkBtn.innerHTML = ' <i class="fa-solid fa-check"></i> '
            checkBtn.classList.add('firstCheckAnm')
            checkBtn.classList.remove('secondCheckAnm')

        }else{
            checkBtn.classList.remove('firstCheckAnm')
            checkBtn.classList.add('secondCheckAnm')
            setTimeout(() => {
            checkBtn.innerHTML = ' '
                
            }, 230);
        }
    })
    ////////////////////////

    todoClearBtn.style.display = 'block'
   

    todoClearBtn.addEventListener('click', function(){
        todoClearBtn.style.display = 'none'
        inputDiv.style.width = '100%'
        clearINput.style.display = 'none'
        input.value = ''
        btn.setAttribute('disabled', 'disabled')

        todoList.classList.add('todolistoff')
        todoList.classList.remove('todoOn')

        setTimeout(() => {
            todo.removeChild(todoList)
        }, 200);
    })
})

clearINput.addEventListener('click', function(){
    input.value = ''
    clearINput.style.display = 'none'
    btn.setAttribute('disabled', 'disabled')

})

input.addEventListener('keyup', ()=>{
    if(input.value < 1){
        btn.setAttribute('disabled', 'disabled')
        inputDiv.style.width = '100%'
        clearINput.style.display = 'none'
    }else{
        btn.removeAttribute('disabled', 'disabled')
        clearINput.style.display = 'block'
    }
})


