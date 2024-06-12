export default class MiniCalendar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.arregloDias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        this.diasSemana = ['S', 'S', 'M', 'T', 'W', 'T', 'F'];
        this.diaActual = new Date().getDate();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const divDias = this.arregloDias.map((dia) => {
            return dia === this.diaActual ? `<div class="dia actual">${dia}</div>` : `<div class="dia">${dia}</div>`;
        }).join('');
        const divDiasSemana = this.diasSemana.map((letra) => {
            return `<div class="letra">${letra}</div>`;
        }).join('');
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <style>
            .calendar {
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                grid-template-rows: repeat(5, 1fr);
                row-gap: 5px;
                column-gap: 7px;
                max-width: 250px;
                background-color: #fff;
                text-align: center;
            }
            .dia, .letra{
                font-size: 10px;
            }
            h4{
                margin-left: 10px;
                margin-bottom: 10px;
            }
            section{
                font-family: "Montserrat", sans-serif;
                border-right: 1px solid #DADCE0;
                width: 270px;
                height: 100%;
            }
            .create{
                box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.1);
                width: 130px;
                height: 40px;
                border-radius: 30px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                font-size: 13px;
            }
            
            .actual{
                background-color: #1967D2;
                color: white;
                border-radius: 50%;
            }
            .dia{
                width: 25px;
                height: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        </style>
        <section class="">
            <div class="create">
            <svg width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                Create
                <span class="material-symbols-outlined">
                    arrow_drop_down
                </span>
            </div>
            <h4 class="">June 2024</h4>
            <div class="calendar">
                ${divDiasSemana}
                ${divDias}
            </div>
        </section>
        `;
    }
}
