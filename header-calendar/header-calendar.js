
export default class HeaderCalendar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // console.log("HeaderCalendar");
        this.shadowRoot.innerHTML =
            `
            <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <style>
                section{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: white;
                    padding: 10px;
                    font-family: "Montserrat", sans-serif;
                    margin-bottom: 8px;
                }
                .iconos-izq{
                    display: flex;
                    align-items: center;
                }
                .icono-lista{
                    margin-right: 20px;
                }
                img{
                    width: 35px;
                    height: 35px;
                    background-color: blue;
                    margin-right: 15px;
                }
                .nombre{
                    margin-right: 60px;
                    font-size: 20px;
                }
                .today{
                    margin-right: 20px;
                    font-size: 12px;
                    padding: 8px 10px;
                    border: 1px solid #DADCE0;
                    background-color: white;
                    border-radius: 3px;
                    font-family: "Montserrat", sans-serif;
                    font-weight: 600;
                }
                .menor-que{
                    margin-right: 5px;
                }
                .mayor-que{
                    margin-right: 30px;
                }
                .mes{
                    margin-right: 40px;
                    font-size: 20px;
                    font-weight: 450;
                }
                
                .iconos-der{
                    display: flex;
                    align-items: center;
                }
                
                .icono{
                    margin-right: 20px;
                }

                .tipo{
                    display: flex;
                    background-color: white;
                    margin-right: 20px;
                    font-size: 12px;
                    padding: 5px 8px;
                    border: 1px solid #DADCE0;
                    border-radius: 3px;
                    font-family: "Montserrat", sans-serif;
                    font-weight: 600;
                    align-items: center;
                    justify-content: space-evenly;
                }

                .calendar-tasks{
                    display: flex;
                    justify-content: space-evenly;
                    border-radius: 3px;
                    border: 1px solid #DADCE0;
                }
                .calendar1{
                    background-color: #E3EEFC;
                    display: flex;
                    align-items: center;
                    padding: 5px 8px;
                    color: #1A73E8;
                }
                .calendar2{
                    background-color: white;
                    display: flex;
                    align-items: center;
                    padding: 5px 8px;
                }
                .imagen-perfil{
                    width: 30px;
                    height: 30px;
                    background-color: black;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }
                .today:hover{
                    background-color: #F9F9F9;
                    cursor: pointer;
                }
            </style>
            <section>
                <div class="iconos-izq">
                    <span class="material-symbols-outlined icono-lista">
                        menu
                    </span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZRzn2OpNq-OaU1QGcrCL9HDxi6k-4HXAyg&s"/>
                    <span class="nombre">
                        Calendar
                    </span>
                    <button class="today">
                        Today
                    </button>
                    <span class="material-symbols-outlined menor-que">
                        chevron_left
                    </span>
                    <span class="material-symbols-outlined mayor-que">
                        chevron_right
                    </span>
                    <span class="mes">
                        June 2024
                    </span>
                    
                </div>
                <div class = "iconos-der">
                    <span class="material-symbols-outlined icono">
                        search
                    </span>
                    <span class="material-symbols-outlined icono">
                        help
                    </span>
                    <span class="material-symbols-outlined icono">
                        settings
                    </span>
                    <div class="tipo">
                        Month
                        <span class="material-symbols-outlined">
                            arrow_drop_down
                        </span>
                    </div>
                    <div class="calendar-tasks icono">
                        <div class="calendar1">
                            <span class="material-symbols-outlined">
                                date_range
                            </span>
                        </div>
                        <div class="v1 calendar2">
                            <span class="material-symbols-outlined">
                                task_alt
                            </span>
                        </div>
                    </div>
                    <span class="material-symbols-outlined icono">
                        apps
                    </span>
                    <div class="imagen-perfil">
                        O
                    </div>
                </div>
            </section>
            `;
    }
}