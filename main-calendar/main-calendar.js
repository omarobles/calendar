import MeetCalendar from "../meet-calendar/meet-calendar.js";
import HeaderCalendar from "../header-calendar/header-calendar.js";
import MiniCalendar from "../mini-calendar/mini-calendar.js";
export default class MainCalendar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.diaActual = new Date().getDate();
    }

    connectedCallback() {
        this.render();
    }

    addButtonListener() {
        const headerCalendar = this.shadowRoot.querySelector('header-calendar');
        const button = headerCalendar.shadowRoot.querySelector('.today');
        button.addEventListener('click', () => {
            const meetCalendar = this.shadowRoot.querySelector('meet-calendar');
            const calendar = meetCalendar.shadowRoot.querySelector('.calendar');
            const divDia = calendar.querySelector(`#dia${this.diaActual}`);
            divDia.style.background = "#E3EEFC";
        })
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            header{
                border-bottom: 1px solid lightgray;
                margin: 0px 0px 15px 0px;
                
            }
            section, main{
                display: flex;
            }
            main{
                width: 100%;
                display: inline;
            }
        </style>
        <header>
            <header-calendar></header-calendar>
        </header>
        <section>
            <aside>
                <mini-calendar></mini-calendar>
            </aside>
            <main>
                <meet-calendar></meet-calendar>
            </main>
        </section>
        `;
        this.addButtonListener();
    }
}

customElements.define('meet-calendar', MeetCalendar);
customElements.define('mini-calendar', MiniCalendar);
customElements.define('header-calendar', HeaderCalendar);