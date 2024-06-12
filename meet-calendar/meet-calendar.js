export default class MeetCalendar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.arregloDias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        this.diasSemana = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
        this.todo = {};
    }

    connectedCallback() {
        this.render();
    }

    addButtonListeners() {
        const button = this.shadowRoot.querySelectorAll('button');
        button.forEach(boton => {
            boton.addEventListener('click', () => {
                const id = boton.getAttribute("index");
                const input = this.shadowRoot.getElementById(`input${id}`);
                const divToDo = this.shadowRoot.getElementById(`todo${id}`);
                if (!this.todo[id]) {
                    this.todo[id] = [];
                }
                if (input.value !== "") {
                    this.todo[id].push(input.value);
                }
                input.value = "";
                this.render();
            });
        })
    }

    render() {
        const divDias = this.arregloDias.map((dia) => {
            let toDoList = '', tareas = '';
            if (this.todo[dia]) {
                toDoList = this.todo[dia].map((elemento) => {
                    tareas = elemento !== "" ? "To Do" : "";
                    return `<li>${elemento}</li>`
                }).join('');
            }
            return `
            <div class="dia" id="dia${dia}">
                <h3>${dia}</h3>
                <div class="content-dia">
                <input type="text" index="${dia}" id="input${dia}">
                    <button id="btn${dia}" index=${dia}>
                    <span class="material-symbols-outlined">
                        add_circle
                    </span>
                    </button>
                </div>
                <div id="todo${dia}" class="todo">
                    <h4>${tareas}</h4>
                    <ul>${toDoList}</ul>
                </div>   
            </div>`;
        }).join('');

        const divDiasSemana = this.diasSemana.map((letra) => {
            return `<div class="letra">${letra}</div>`;
        }).join('');
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <style>
            .calendar {
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                background-color: #fff;
                text-align: center;
                font-family: "Montserrat", sans-serif;
            }
            .dia, .letra{
                font-size: 15px;
            }

            .letra{
                height: 10px;
                margin: 10px;
            }

            .dia{
                border-right: 1px solid #DADCE0;
                border-bottom: 1px solid black;
                display: flex;
                flex-direction: column;
                padding: 0px 15px 0px 15px;
                align-items: center;
            }

            .content-dia{
                display: flex;
                justify-content: center;
                align-items: center
            }
            
            input{
                font-weight: 500;
                font-family: "Montserrat", sans-serif;
                width: 100px;
            }

            button{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px; 
                border: none; 
                background-color: transparent;
                cursor: pointer;
            }

            .todo{
                height: auto;
            }

            ul {
                list-style: none;
                padding: 0;
            }

        </style>
        <div class="calendar">
            ${divDiasSemana}
            ${divDias}
        </div>
        `;
        this.addButtonListeners();
    }
}
