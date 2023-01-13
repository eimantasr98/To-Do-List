window.addEventListener('load', () => {                      //addeventlisteneri uzdedam visam page'ui ir, kai tik uzsikraus, tiek html, tiek css ir js - iskvies funkcija, kuri targetins elementus (form, input, listEl). Siaip, nelabai suprantu, kam sitas reikalingas, nes ir be jo viskas veikia.
    const form = document.querySelector('#task-form');
    const input = document.querySelector('#task-input');    //pasirenkam situos elementus is html'o ir sudedam i kintamuosius, kad galetume, veliau, jais manipuliuot.
    const listEl = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {      //formai, uzdedam eventlisteneri, paspaudus submit'a, siuo atveju "Add task" button'a - suveiks funkcija.
        e.preventDefault();         //si funkcija, neleis persikraut puslapiui, kai pasubmitinam.
        
        const task = input.value;       //kintamajam priskiriam inputo verte, kuri yra paimama is teksto lauko, i kuri useris veda teksta.

        if(!task) {     
            alert('please add a task');      //simple if statementas, jeigu i laukeli nieko neivestume - gautume alerta.
            return;     //funkcija bus nutraukta iskvietus return'a, kad toliau nebeveiktu si funkcija (kad pasubmitinus nepridetu tuscio task'o).
        } 

        const taskEl = document.createElement('div');       //dokumente sukuriam div elementa ir priskiriam kintamajam.
        taskEl.classList.add('task');       //sitam div elementui priskiriam klase - task.

        const taskContentEl = document.createElement('div');    
        taskContentEl.classList.add('content');

        taskEl.appendChild(taskContentEl);      //divui priskiriam vaikini elementa (.task > .content).

        const taskInputEl = document.createElement('input');
        taskInputEl.classList.add('text');
        taskInputEl.type = 'text';      //nurodom elemento tipa.
        taskInputEl.value = task;       //perduodam inputo verte, i kuri turim irasyt task'a, kad atvaizduotu naujam inpute, kai pasubmitinam.
        taskInputEl.setAttribute('readonly', 'readonly');       //sitam inputui paskiriam readonly atributa, kad nebutu galima jo redaguot.

        taskContentEl.appendChild(taskInputEl);     //.content divui priskiriam vaikini elementa (.content > .text).

        const taskActionsEl = document.createElement('div');
        taskActionsEl.classList.add('actions');

        const taskEditEl = document.createElement('button');
        taskEditEl.classList.add('edit');
        taskEditEl.innerHTML = 'Edit';      //su innerHTML parametru nurodom, ka norim atvaizuot kaip button'o teksta. (<button>Edit(tai cia sitas tekstas butu, jeigu gerai suprantu)</button>)

        const taskDeleteEl = document.createElement('button');
        taskDeleteEl.classList.add('delete');
        taskDeleteEl.innerHTML = 'Delete';

        taskActionsEl.appendChild(taskEditEl);      
        taskActionsEl.appendChild(taskDeleteEl);        //.actions divui prisikiriam vaikinius elementus - .edit ir .delete.

        taskEl.appendChild(taskActionsEl);      //.task divui priskiriam vaikini elementa .actions.

        listEl.appendChild(taskEl);     //.tasks divui priskiriam vaikini elementa .task.

        input.value = '';       //sitas, irasius task'a ir pasubmitinus, input laukeli palieka tuscia.

        taskEditEl.addEventListener('click', () => {  
            if(taskEditEl.innerText == 'EDIT') {        // Sitoj eilutej, parasius " taskEditEl.innerText.toLowerCase == 'edit' " - funkcija neveikia, tai nelabai suprantu, kas per nesamone
                taskInputEl.removeAttribute('readonly');
                taskInputEl.focus();   
                taskEditEl.innerText = 'Save';
            } else {
                taskInputEl.setAttribute('readonly', 'readonly');       // 52 - 59 eilutes. Ant edit buttono uzdedam eventlisteneri. Paclickinus iskvieciama funkcija, kuri patikrina, kad buttono tekstas butu lygus "edit", jeigu true, tai nuo inputo nuimamas readonly atributas ir buttono tekstas pasikeicia i 'save'.
                taskEditEl.innerText = 'Edit';                          // jeigu pirmas statementas butu false - sokam prie else - nustatomas readonly atributas ir buttono tekstas pakeiciamas is 'save' i 'edit'.
            }
        })

        taskDeleteEl.addEventListener('click', () => {  
            listEl.removeChild(taskEl);                         //delete buttonui uzdedam eventlisteneri, paclickinus - iskvieciama funkcija, kuri panaikina .tasks vaikini elementa .task.
        })
    })

        
})