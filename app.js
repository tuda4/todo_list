import html from "./core.js"
import { connect } from "./store.js"
import Header from "./js/Header.js"
import Container from "./js/Container.js"
import Footer from "./js/Footer.js"

function App({ todos }) {
    return html`
    <section class="todoapp">
        ${Header()}
        ${todos.length > 0 && Container()}
        ${todos.length > 0 && Footer()}
    </section> 
    `
}

export default connect()(App)