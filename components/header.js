var headerTemplate = document.createElement('template');

headerTemplate.innerHTML = 
`
<style>
    :host {
    all: initial;
    display: block;
    }   
</style>
<header class="container relative font-bon-font selection:bg-bon-geel">

    <div class="fixed top-0 z-50">
        <div id="container" class="absolute bg-bon-blau-helder w-screen h-24">
            
            <div id="logo" class="flex justify-between p-8 text-bon-wit">

                <div id="logo-1" class="text-3xl font-bold flex">
                    <a href="/views/pages/index.html">
                        <img src="/public/assets/bon_travel_favicon_v.2.png" class="w-12 h-12 -mt-2 mr-2" alt="">
                    </a>
                    <a href="/views/pages/index.html" class="-mt-1 drop-shadow-md select-none">Bon travel</a>
                </div>

                <div class="mt-2 max-lg:hidden">
                    <h1 class="text-md">"Reis mee en beleef de allermooiste avonturen!"</h1>
                </div>

                <div class="flex flex-col items-center gap-1 -mt-7 select-none max-xl:hidden"
                                 
                    <span class="border">
                        <p class="text-sm">3 Reviews</p>
    
                        <hr class="border border-bon-blau-donker w-1/2 rounded-b-lg flex justify-center">
    
                        <div class="review-sterren-sterren flex text-bon-geel drop-shadow-md">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
    
                        <p class="text-xs">5/5</p>
                    </span>

                    <p class="text-sm font-bold -mt-1">Tevredenheid van onze klanten</p>

                </div>
            

                <div id="header-bar-right" class="flex text-bon-wit drop-shadow-md">
                    
                    <ul id="header-bar-right-1" class="flex gap-5 -mt-3 mr-10 max-md:hidden">
                        
                        <li id="bel-ons">
                            <a href="tel:+3163781317" class="flex flex-col -mt-3 gap-2 border-2 border-opacity-80 border-bon-wit hover:border-bon-geel hover:bg-bon-geel rounded-2xl p-4 hover:shadow-xl hover:text-bon-blau-helder hover:duration-500">
                                <span id="bel" class="flex gap-2">
                                    <i class="fa-solid fa-phone"></i>
                                    <p class="-mt-1 font-medium">Bel ons</p>
                                </span>
                                <span id="nummer">
                                    <p class="text-xs">+31 6 3781317</p>
                                </span>
                                
                            </a>
                        </li>
                
                        <li id="email-ons">
                            <a href="mailto:info@bontravel.com" class="flex flex-col mr-10 -mt-3 gap-2 border-2 border-opacity-80 border-bon-wit hover:border-bon-geel hover:bg-bon-geel rounded-2xl p-4 hover:shadow-xl hover:text-bon-blau-helder hover:duration-500">
                                <span id="email" class="flex gap-2">
                                    <i class="fa-solid fa-envelope"></i>
                                    <p class="-mt-1 font-medium">Email ons</p>
                                </span>
                                <span id="email2">
                                    <p class="text-xs">info@bontravel.com</p>
                                </span>
                                
                            </a>
                        </li>

                    </ul>

                    <ul id="header-bar-right-2" class="flex gap-3 -mt-3 justify-center max-md:gap-1 max-md:flex max-md:justify-end max-md:m-auto max-md:-mt-0.5 max-md:mr-5">
                        
                        <li id="search-box">
                            <a href="" class="">
                                <input type="text" class="hidden" autofocus>
                                <i class="fa-solid fa-magnifying-glass hover:bg-bon-geel rounded p-4 hover:shadow-xl hover:text-bon-blau-helder hover:duration-500   max-md:p-2"></i>
                            </a>
                        </li>
                
                        <li id="winkelwagen">
                            <a href="winkelwagen.html">
                                <i class="fa-solid fa-cart-shopping hover:bg-bon-geel rounded p-4 hover:shadow-xl hover:text-bon-blau-helder hover:duration-500   max-md:p-2"></i>
                            </a>
                        </li>
                
                        <li id="klant">
                            <a href="">
                                <i class="fa-solid fa-user hover:bg-bon-geel rounded p-4 hover:shadow-xl hover:text-bon-blau-helder hover:duration-500   max-md:p-2"></i>
                            </a>
                        </li>

                    </ul>

                    <div id="menu-toggle" class="hidden max-md:block">
                        <a href="" class="flex flex-col items-center text-bon-wit -mt-2 -mr-3 drop-shadow-md">
                            <i class="fa-solid fa-bars text-3xl"></i>
                            <p class="text-xs">MENU</p>
                        </a>  
                    </div>

                </div>

            </div>

        </div>
    </div>

    <div id="header-bar-right-active" class="flex-col bg-bon-blau-helder absolute w-72 h-96 right-0 border border-bon-zwart rounded text-bon-wit hidden z-50">

        <div id="menu-toggle-active" class="">
            <a href="">
                <i class="fa-solid fa-x text-bon-wit text-2xl absolute right-1 m-3 drop-shadow-md"></i>
            </a>
        </div>
        
        <hr class="border-1 absolute top-14 right-3 w-11/12 rounded">

        <ul id="menu" class="flex flex-col items-center gap-5 m-auto mt-16 text-bon-wit drop-shadow-md">
            <li>
                <a class="menu-link flex gap-1 -mr-3 hover:bg-bon-geel rounded p-2 hover:shadow-xl hover:text-bon-blau-helder hover:duration-500" href="/views/pages/bestemmingen.ejs" target="_blank">
                    <p>Bestemmingen</p>
                    <i class="fa-solid fa-angle-down mt-1"></i>
                </a>
            </li>
            <li><a class="menu-link inline-block mb-2 hover:bg-bon-geel rounded p-2 hover:shadow-xl hover:text-bon-blau-helder hover:duration-500"  href="/views/pages/over_ons.html" target="_blank">Over ons</a></li>
            <li><a class="menu-link hover:bg-bon-geel rounded p-2 hover:shadow-xl hover:text-bon-blau-helder hover:duration-500"  href="/views/pages/contact.html" target="_blank">Contact</a></li>
        </ul>

        <ul id="header-bar-right-1-hidden" class="flex flex-col gap-5 m-auto drop-shadow-md">
            
            <li id="bel-ons-hidden">
                <a href="tel:+3163781317" class="flex flex-col items-center border-2 border-opacity-80 border-bon-wit hover:border-hidden hover:bg-bon-geel rounded-2xl mx-5 py-2 hover:shadow-xl hover:text-bon-blau-helder hover:duration-500">
                    <span id="bel-hidden" class="flex gap-2">
                        <i class="fa-solid fa-phone"></i>
                        <p class="-mt-1 font-medium">Bel ons</p>
                    </span>
                    <span id="nummer-hidden">
                        <p class="text-xs">+31 6 3781317</p>
                    </span>
                    
                </a>
            </li>
    
            <li id="email-ons-hidden">
                <a href="mailto:info@bontravel.com" class="flex flex-col items-center border-2 border-opacity-80 border-bon-wit hover:border-hidden hover:bg-bon-geel rounded-2xl mx-5 py-2 hover:shadow-xl hover:text-bon-blau-helder hover:duration-500">
                    <span id="email-hidden" class="flex gap-2">
                        <i class="fa-solid fa-envelope"></i>
                        <p class="-mt-1 font-medium">Email ons</p>
                    </span>
                    <span id="email2-hidden">
                        <p class="text-xs">info@bontravel.com</p>
                    </span>
                    
                </a>
            </li>

        </ul>

    </div>
    
</header>

<section>
<div id="cookies" class="hidden">
    <div id="cookies-container" class="w-full m-auto">
        <div id="cookies-cookies" class="flex flex-col justify-center p-10 px-32 rounded-t-lg w-full fixed bottom-0 bg-bon-wit shadow-top z-50">
            <img src="/public/assets/cookie.png" class="h-14 w-14 mb-5" alt="">
            <p class="text-lg font-bold">Optionele cookies en technologieën toestaan?</p>
            <p class="my-3">We gebruiken cookies en andere technologieën om onze site betrouwbaar te laten werken, 
                om ons in staat te stellen statistische analyses uit te voeren en om u relevante inhoud en gepersonaliseerde advertenties op de site en andere kanalen te tonen.
                Als je het niet eens bent met het gebruik van optionele cookies en technologieën, klik dan hier. 
                Je kunt je selectie in de instellingen aanpassen of deze onder aan de pagina op elk gewenst moment voor de toekomst wijzigen.</p>
            <a class="font-bold text-bon-geel" href="/views/pages/privacybeleid.html">Privacybeleid</a>
            <button class="rounded-lg p-5 my-3 cursor-pointer bg-bon-blau-helder text-bon-wit shadow-lg w-1/6" id="cookies-cookies-button">Toestaan</button>
        </div>
    </div>
</div>
</section>
`;


class Header extends HTMLElement {
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



// var scriptCookie = document.createElement("script");
// scriptCookie.innerHTML = ` 

// <script defer>

// setCookie = (cName, cValue, expDays) => {
//     let date = new Date();
//     date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
//     const expires = "expires=" + date.toUTCString();
//     document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
// }

// getCookie = (cName) => {
//     const name = cName + "=";
//     const cDecoded = decodeURIComponent(document.cookie);
//     const cArr = cDecoded.split("; ")
//     let value;
//     cArr.forEach(val => {
//         if(val.indexOf(name) === 0) value = val.substring(name.length);
//     })

//     return value;
// }

// document.getElementById("cookies-cookies-button").addEventListener("click", () => {
//     document.getElementById("cookies").style.display = "none";
//     setCookie("cookie", true, 30);
// })

// cookieMessage = () => {
//     if(!getCookie("cookie"))
//         document.getElementById("cookies").style.display = "block";
// }

// window.addEventListener("load", cookieMessage);

// </script> 
// `;

// Element.appendChild(scriptCookie);


customElements.define('reusable-header', Header);