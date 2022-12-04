import html from "../core.js";

function Header() {
    return html`
    <header class="header">
        <h1>todoList</h1>
        <input 
        class="new-todo" 
        placeholder="What needs to be done?" 
        autofocus
        onkeypress="event.keyCode === 13 && dispatch('add', this.value.trim()) " 
        >
    </header>
    `
}

export default Header