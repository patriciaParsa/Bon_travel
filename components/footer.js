var headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `    
<style>
    :host {
    all: initial;
    display: block;
    }   
</style>        

<footer>
    <div class="font-bon-font text-bon-wit selection:bg-bon-geel">
        <div class=" bg-bon-zwart flex h-4/6 w-full p-10 m-auto max-md:h-auto">
            <div class="grid grid-cols-4 gap-14 m-auto -mt-1 max-md:grid-cols-3 max-md:m-10 max-sm:grid-cols-1">
                <div id="cookiesprivacy" class="flex flex-col drop-shadow-md">
                    <h2 class="font-extrabold text-2xl">Cookies en Privacy</h2>
                    <ul class="flex flex-col gap-1 mt-1">
                        <li>
                            <a href="../pages/privacybeleid.html" class="hover:text-bon-geel duration-300">Cookies</a>
                        </li>
                        <li>
                            <a href="../pages/privacybeleid.html" class="hover:text-bon-geel duration-300">Privacybeleid</a>
                        </li>
                        <li>
                            <a href="../pages/algemene_voorwarden.html" class="hover:text-bon-geel duration-300">Algemene voorwaarden</a>
                        </li>
                    </ul>
                </div>
                
                <div id="populaire-bestemmingen" class="drop-shadow-md">
                    <h4 class="font-extrabold text-2xl">Populaire bestemmingen</h4>
                    <ul class="flex flex-col gap-1 mt-1">
                        <li>
                            <a href="../pages/bestemming/californie/californie.html" class="hover:text-bon-geel duration-300">Californië</a>
                        </li>
                        <li>
                            <a href="../pages/bestemming/frankrijk/frankrijk.html" class="hover:text-bon-geel duration-300">Frankrijk</a>
                        </li>
                        <li>
                            <a href="../pages/bestemming/spanje/spanje.html" class="hover:text-bon-geel duration-300">Spanje</a>
                        </li>
                        <li>
                            <a href="../pages/bestemming/taiwan/taiwan.html" class="hover:text-bon-geel duration-300">Taiwan</a>
                        </li>
                        <li>
                            <a href="../pages/bestemming/singapore/singapore.html" class="hover:text-bon-geel duration-300">Singapore</a>
                        </li>
                        <li>
                            <a href="../pages/bestemming/hawai/hawai.html" class="hover:text-bon-geel duration-300">Hawaï</a>
                        </li>
                    </ul>
                </div>
            
                <div id="adres" class="flex flex-col gap-1 mt-1 drop-shadow-md">
                    <h4 class="font-extrabold text-2xl">Neem contact met ons op</h4>
                    <p>Bon travel B.V.</p>
                    <p>Anna Spenglerstraat 79</p>
                    <p>1054 NH Amsterdam</p>
                    <a href="mailto:info@bontravel.com" class="hover:text-bon-geel duration-300"><i class="fa-solid fa-envelope mr-2"></i>info@bontravel.com</a>
                    <a href="tel:+3163781317" class="hover:text-bon-geel duration-300"><i class="fa-solid fa-phone mr-2"></i>+31 6 3781317</a>
                </div>
                
                <div id="informatie" class="drop-shadow-md">
                    <h4 class="font-extrabold text-2xl">Informatie</h4>
                    <ul class="flex flex-col gap-1 mt-1">
                        <li>
                            <a href="../pages/index.html" class="hover:text-bon-geel duration-300">Home</a>
                        </li>
                        <li>
                            <a href="../pages/over_ons.html" class="hover:text-bon-geel duration-300">Over ons</a>
                        </li>
                        <li>
                            <a href="../pages/contact.html" class="hover:text-bon-geel duration-300">Contact</a>
                        </li>
                    </ul>
                </div>

                <div id="nieuwsbrief" class="drop-shadow-md">
                    <h4 class="font-extrabold text-2xl mb-1">Nieuwsbrief</h4>
                    <a href="../pages/nieuwsbrief.html" class="hover:text-bon-geel duration-300" target="_blank">Meld je hier aan voor onze nieuwsbrief</a>
                </div>
            
                <div id="sm-bar" class="drop-shadow-md">
                    <h3 class="font-extrabold text-2xl">Volg ons op</h3>
                    <ul class="flex gap-3 mt-1">
                        <li>
                            <a href="https://tiktok.com/" class="hover:text-bon-geel duration-300 p-2">
                                <i class="fa-brands fa-tiktok"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://pinterest.com/" class="hover:text-bon-geel duration-300 p-2">
                                <i class="fa-brands fa-pinterest"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com/" class="hover:text-bon-geel duration-300 p-2">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            
                <div id="partners-bar" class="drop-shadow-md">
                    <h3 class="font-extrabold text-2xl">Partners van Bon travel</h3>
                    <ul class="flex flex-wrap mt-1">

                        <li>
                            <a href="https://www.kiwi.com/nl/" target="_blank"><img class="h-4 m-2 object-contain" src="../assets/kiwi.png" alt=""></a>
                        </li>

                        <li>
                            <a href="https://www.tui.nl/" target="_blank"><img class="h-4 m-2 object-contain" src="../public/assets/tui.png" alt=""></a>
                        </li>

                        <li>
                            <a href="https://www.klm.nl/" target="_blank"><img class="h-4 m-2 object-contain" src="../public/assets/klm.png" alt=""></a>
                        </li>

                        <li>
                            <a href="https://travelifesustainability.com/" target="_blank"><img class="h-4 m-2 object-contain" src="../public/assets/travelife.png" alt=""></a>
                        </li>

                        <li>
                            <a href="https://www.ns.nl/" target="_blank"><img class="h-4 m-2 object-contain" src="../public/assets/ns.png" alt=""></a>
                        </li>

                        <li>
                            <a href="https://www.sunweb.nl/" target="_blank"><img class="h-2 m-2 object-contain" src="../public/assets/sunweb.svg" alt=""></a>
                        </li>

                        <li>
                            <a href="https://www.wereldstadgidsen.com/" target="_blank"><img class="h-4 m-2 object-contain" src="../public/assets/wereldstadgidsen.png" alt=""></a>
                        </li>

                        <li>
                            <a href="https://9292.nl/" target="_blank"><img class="h-4 m-2 object-contain" src="../public/assets/9292.png" alt=""></a>
                        </li>

                        <li>
                            <a href="https://www.reisbureaumaroctravel.nl/" target="_blank"><img class="h-3 m-2 object-contain" src="../public/assets/maroctravel.png" alt=""></a>
                        </li>

                        <li>
                            <a href="https://www.sgr.nl/" target="_blank"><img class="h-4 m-2 object-contain" src="../public/assets/sgr.svg" alt=""></a>
                        </li>

                    </ul>
                </div>
            
                <div id="betaal-bar" class="drop-shadow-md">
                    <h3 class="font-extrabold text-2xl">Betaal veilig en makkelijk</h3>
                    <ul class="flex gap-3 mt-1">
                        <li>
                            <i class="fa-brands fa-cc-visa"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-paypal"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-ideal"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-cc-mastercard"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
        <span class="flex justify-center h-10 w-full pt-2 bg-bon-zwarter shadow-2xl">Copyright © 2023 <a href="" class="block hover:text-bon-geel duration-300 mx-1">Bon travel</a></span>
    
    </div>
</footer>
`;


class Footer extends HTMLElement {
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

customElements.define('reusable-footer', Footer);
