var headerTemplate = document.createElement('template');

headerTemplate.innerHTML = 
    `
    <style>
        :host {
        all: initial;
        display: block;
        }   
    </style>
    <nav class="container relative font-bon-font max-md:hidden selection:bg-bon-geel">         
        <div class="fixed top-24 z-50">    
            <div id="container" class="absolute bg-bon-blau-donker w-screen h-16 p-8 shadow-md">
                <ul id="menu" class="flex justify-end gap-16 mr-20 -mt-3 text-bon-wit">

                    <li class="group block">

                        <div id="nav-bestemmingen" class="block">
                            <a class="flex gap-1 -mt-4 hover:bg-bon-geel rounded p-4 hover:shadow-xl hover:text-bon-blau-helder hover:duration-500" href="/views/pages/bestemmingen.html">
                                <p>Bestemmingen</p>
                                <i class="fa-solid fa-angle-down mt-1"></i>
                            </a>
                        </div>
                
                        <div id="nav-ul" class="hidden group-hover:block">
                
                            <ul class="flex flex-col mt-1 p-3 m-1 bg-bon-blau-donker rounded">
                
                                <li>
                                    <a href="/views/pages/bestemming/californie/californie.html">Californië</a>
                                </li>
                                <li>
                                    <a href="/views/pages/bestemming/frankrijk/frankrijk.html">Frankrijk</a>
                                </li>
                                <li>
                                    <a href="/views/pages/bestemming/spanje/spanje.html">Spanje</a>
                                </li>
                                <li>
                                    <a href="/views/pages/bestemming/taiwan/taiwan.html">Taiwan</a>
                                </li>
                                <li>
                                    <a href="/views/pages/bestemming/singapore/singapore.html">Singapore</a>
                                </li>
                                <li>
                                    <a href="/views/pages/bestemming/hawai/hawai.html">Hawaï</a>
                                </li>
                
                            </ul>
                
                        </div>
            
                    </li>

                    <li><a class="hover:bg-bon-geel rounded p-4 hover:shadow-xl hover:text-bon-blau-helder hover:duration-500"  href="/views/pages/over_ons.html">Over ons</a></li>
                    <li><a class="hover:bg-bon-geel rounded p-4 hover:shadow-xl hover:text-bon-blau-helder hover:duration-500"  href="/views/pages/contact.html">Contact</a></li>
                </ul>
            </div>
        </div>    
    </nav>
    `;


class Nav extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        var fontAwesome = document.querySelector('link[href*="font-awesome"]');
        var shadowRoot = this.attachShadow({ mode: 'closed'});

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
        }

        var tailwindcss = document.querySelector('link[href*="tailwind.css"]');

        if (tailwindcss) {
            shadowRoot.appendChild(tailwindcss.cloneNode());
        }

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('reusable-nav', Nav);