import { BaseComponent } from "./BaseComponent";

export class HeaderComponent extends BaseComponent{
    render(){
        const el = this.shadowRoot!;
        el.innerHTML = /*HTML*/ `
        <style>
            header {
                padding: var(--spacing);
                grid-area: header;
                border: solid;
                border-radius: 4px;
                border-color: var(--menu-link);
                --bg-colour: #b59676;
                background-color: var(--bg-colour);
            }

            label {
                font-size: clamp(var(--min-font), var(--preferred-font), var(--max-font));
            }

            span {
                font-size: clamp(var(--min-font), var(--preferred-font), var(--max-font));
            }

            input {
                transition: var(--transition);
            }

            input:hover {
                transform: scale(1.1);
            }

            .hamburger {
                display: none;
                flex-direction: column;
                justify-content: space-between;
                width: 30px;
                height: 24px;
            }

            .hamburger-line {
                display: block;
                width: 100%;
                height: 3px;
                background: black;
                border-radius: 2px;
                --transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                            opacity 0.2s ease;
                transition: var(--transition);
                transform-origin: center;
            }

            .menu-toggle {
                display: none;
            }

            .menu-toggle:checked ~ .hamburger .hamburger-line:nth-child(1) {
                transform: rotate(45deg) translateY(15px);
            }

            .menu-toggle:checked ~ .hamburger .hamburger-line:nth-child(2) {
                opacity: 0;
            }

            .menu-toggle:checked ~ .hamburger .hamburger-line:nth-child(3) {
                transform: rotate(-45deg) translateY(-15px);
            }

            .nav-menu {
                display: flex;
                justify-content: space-between;
                position: relative;
            }

            .navlinks {
                display: flex;
                gap: var(--spacing);
            }

            a {
                color: var(--menu-link);
                text-decoration: none;
            }

            a:hover {
                color: var(--menu-link-hover);
                text-decoration: underline;
            }

            input[type="search"] {
                width: 8rem;
                height: 25px;
                padding: 0.2rem 0.4rem;
                font-size: 0.9rem;
            }

            /***Mobil***/
            @media (max-width: 480px) {
                .hamburger {
                    display: flex;
                }

                .navlinks {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: var(--bg-colour);
                    flex-direction: column;
                    gap: 0;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .menu-toggle:checked ~ .navlinks {
                    max-height: 400px;
                }
            }
            
        </style>
        <header>
            <nav class="nav-menu">
                <h3 aria-label="Page Name">The Story Corner</h3>
                <input type="checkbox" id="menu-toggle" class="menu-toggle" />
                <label for="menu-toggle" class="hamburger" aria-label="Open Menu">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </label>
                <div class="navlinks">
                    <a href="homepage" aria-label="Go to homepage">Home</a>
                    <a href="new entry" aria-label="Go to new entry">New</a>
                    <a href="list" aria-label="Go to entries list">Item List</a>
                    <a href="favourites" aria-label="Go to favourites">Favourites</a>
                    <a href="recent" aria-label="Go to recently edited">Recently Edited</a>
                    <input type="search" placeholder="Search" aria-label="Searchbar">
                </div>
            </nav>
        </header>
        `
    }
}