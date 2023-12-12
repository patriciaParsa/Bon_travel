var headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `    
<style>
    :host {
    all: initial;
    display: block;
    }   
</style>        

<section id="bestemmingen" class="w-full mt-60 mb-20 font-bon-font text-bon-wit selection:bg-bon-geel">

    <div id="bestemmingen-content" class="flex flex-col items-center mb-10 max-md:mx-20 max-md:p-3">
        <h3 class="font-extrabold text-2xl mb-3 text-bon-geel selection:bg-bon-blau-helder">Bekijk onze deals!</h3>
        <p class="leading-7 text-bon-zwart"> Je kan niet meer wachten voor je volgende vakantie. Het tropisch motorfiets avontuur in Azië of een crazy-wild roadtrip in Amerika? Bekijk onze deals!</p>
    </div>

    <div id="bestemmingen-catalog" class="mt-5">

        <div id="bestemmingen-titel" class="flex flex-col items-center mb-3">
            <h2 class="font-extrabold text-3xl text-bon-geel selection:bg-bon-blau-helder">Bestemmingen</h2>
            <hr class="border border-bon-blau-donker w-1/2 rounded-b-lg flex justify-center m-5">
        </div>

        <div id="bestemmingen-lijst" class="grid grid-cols-3 justify-items-center m-auto px-32 max-lg:grid-cols-2 max-md:px-16 max-sm:grid-cols-1 max-sm:px-8">

            <div class="bestemming border pb-60 hover:shadow-2xl group w-3/4 h-2/3 relative">
                <a href="../views/pages/bestemming/frankrijk/frankrijk.html" class="absolute top-0 w-full h-full z-30 text-transparent" target="_blank">card</a>
                <div class="group-hover:shadow-bottom"> 
                    <div class="foto group-hover:overflow-hidden">
                        <img class="w-full h-1/2 group-hover:scale-125 group-hover:duration-500" src="../public/assets/frankrijk.jpg" alt="img">
                    </div>
                </div>   
                
                <div class="inhoud flex flex-col items-center">
                    <h3 class="bg-bon-geel text-bon-wit flex justify-center font-extrabold w-1/2 rounded-b-xl p-1 group-hover:shadow-xl">Frankrijk</h3>
                    <p class="text-center text-sm p-5 w-full text-bon-zwart group">Bekend van Franse wijnen, lavendelvelden, Eiffeltoren, stokbroden of kunst. Frankrijk is een geliefd vakantieland!</p>
                    <a href="../pages/bestemming/frankrijk/frankrijk.html" class="bestemmingen-button bg-bon-blau-donker text-bon-wit p-3 rounded-xl hover:bg-bon-geel hover:duration-500 hover:shadow-xl z-40" target="_blank">Ontdek Frankrijk</a>
                </div>
            </div>

            <div class="bestemming border pb-60 hover:shadow-2xl group w-3/4 h-2/3 relative">
                <a href="../views/pages/bestemming/spanje/spanje.html" class="absolute top-0 w-full h-full z-30 text-transparent" target="_blank">card</a>
                <div class="group-hover:shadow-bottom"> 
                    <div class="foto group-hover:overflow-hidden">
                        <img class="w-full h-1/2 group-hover:scale-125 group-hover:duration-500" src="../public/assets/spanje.jpg" alt="img">
                    </div>
                </div>   
                
                <div class="inhoud flex flex-col items-center">
                    <h3 class="bg-bon-geel text-bon-wit flex justify-center font-extrabold w-1/2 rounded-b-xl p-1 group-hover:shadow-xl">Spanje</h3>
                    <p class="text-center text-sm p-5 w-full text-bon-zwart group">Wat is typisch Spaans? Naast zijn uitstekende keuken biedt Spanje een rijke cultuur, adembenemende kunst, indrukwekkende architectuur en aantrekkelijke stranden.</p>
                    <a href="../views/pages/bestemming/spanje/spanje.html" class="bestemmingen-button bg-bon-blau-donker text-bon-wit p-3 rounded-xl mb-5 hover:bg-bon-geel hover:duration-500 hover:shadow-xl z-40" target="_blank">Ontdek Spanje</a>
                </div>
            </div>

            <div class="bestemming border pb-60 hover:shadow-2xl group w-3/4 h-2/3 relative">
                <a href="../views/pages/bestemming/californie/californie.html" class="absolute top-0 w-full h-full z-30 text-transparent" target="_blank">card</a>
                <div class="group-hover:shadow-bottom"> 
                    <div class="foto group-hover:overflow-hidden">
                        <img class="w-full h-1/2 group-hover:scale-125 group-hover:duration-500" src="../public/assets/californie.jpg" alt="img">
                    </div>
                </div>   
                
                <div class="inhoud flex flex-col items-center">
                    <h3 class="bg-bon-geel text-bon-wit flex justify-center font-extrabold w-1/2 rounded-b-xl p-1 group-hover:shadow-xl">Californië</h3>
                    <p class="text-center text-sm p-5 w-full text-bon-zwart group">In de "Golden State" vindt men een schitterende kustlijn met zonnige stranden maar ook indrukwekkende canyons, bergketens met gletsjers en prachtige watervallen. Californië wordt tevens bekend van zijn wereldberoemde filmindustrie en technische innovaties.</p>
                    <a href="../views/pages/bestemming/californie/californie.html" class="bestemmingen-button bg-bon-blau-donker text-bon-wit p-3 rounded-xl mb-5 hover:bg-bon-geel hover:duration-500 hover:shadow-xl z-40" target="_blank">Ontdek Californië</a>
                </div>
            </div>

            <div class="bestemming border pb-60 hover:shadow-2xl group w-3/4 h-2/3 relative">
                <a href="../views/pages/bestemming/hawai/hawai.html" class="absolute top-0 w-full h-full z-30 text-transparent" target="_blank">card</a>
                <div class="group-hover:shadow-bottom"> 
                    <div class="foto group-hover:overflow-hidden">
                        <img class="w-full h-1/2 max-h-60 group-hover:scale-125 group-hover:duration-500" src="../public/assets/hawai.jpg" alt="img">
                    </div>
                </div>   
                
                <div class="inhoud flex flex-col items-center">
                    <h3 class="bg-bon-geel text-bon-wit flex justify-center font-extrabold w-1/2 rounded-b-xl p-1 group-hover:shadow-xl">Hawaï</h3>
                    <p class="text-center text-sm p-5 w-full text-bon-zwart group">Archipel vol vulkanen met mooie stranden geliefd vooral onder surfers en snorkelaars. Eilanden hebben een gevarieerd landschap en tropisch klimaat waardoor wordt Hawaï erg populair onder toeristen van over de hele wereld.</p>
                    <a href="../views/pages/bestemming/hawai/hawai.html" class="bestemmingen-button bg-bon-blau-donker text-bon-wit p-3 rounded-xl mb-5 hover:bg-bon-geel hover:duration-500 hover:shadow-xl z-40" target="_blank">Ontdek Hawaï</a>
                </div>
            </div>

            <div class="bestemming border pb-60 hover:shadow-2xl group w-3/4 h-2/3 relative">
                <a href="../views/pages/bestemming/taiwan/taiwan.html" class="absolute top-0 w-full h-full z-30 text-transparent" target="_blank">card</a>
                <div class="group-hover:shadow-bottom"> 
                    <div class="foto group-hover:overflow-hidden">
                        <img class="w-full h-1/2 group-hover:scale-125 group-hover:duration-500" src="../public/assets/taiwan.jpg" alt="img">
                    </div>
                </div>   
                
                <div class="inhoud flex flex-col items-center">
                    <h3 class="bg-bon-geel text-bon-wit flex justify-center font-extrabold w-1/2 rounded-b-xl p-1 group-hover:shadow-xl">Taiwan</h3>
                    <p class="text-center text-sm p-5 w-full text-bon-zwart group">Taiwan als een verborgen paradijs. Indrukwekkende tempels, mysterieuze meren en tropische natuurverschijnselen: dat is wat Taiwan siert. Of men nu koloniale steden wilt bezoeken, gaat relaxen aan het strand of wilt wandelen in de bergen, in Taiwan kan het allemaal!</p>
                    <a href="../views/pages/bestemming/taiwan/taiwan.html" class="bestemmingen-button bg-bon-blau-donker text-bon-wit p-3 rounded-xl mb-5 hover:bg-bon-geel hover:duration-500 hover:shadow-xl z-40" target="_blank">Ontdek Taiwan</a>
                </div>
            </div>

            <div class="bestemming border pb-60 hover:shadow-2xl group w-3/4 h-2/3 relative">
                <a href="../views/pages/bestemming/singapore/singapore.html" class="absolute top-0 w-full h-full z-30 text-transparent" target="_blank">card</a>
                <div class="group-hover:shadow-bottom"> 
                    <div class="foto group-hover:overflow-hidden">
                        <img class="w-full h-1/2 group-hover:scale-125 group-hover:duration-500" src="../public/assets/singapore.jpg" alt="img">
                    </div>
                </div>   
                
                <div class="inhoud flex flex-col items-center">
                    <h3 class="bg-bon-geel text-bon-wit flex justify-center font-extrabold w-1/2 rounded-b-xl p-1 group-hover:shadow-xl">Singapore</h3>
                    <p class="text-center text-sm p-5 w-full text-bon-zwart group">Singapore staat bekend om zijn skyline met vele hoge wolkenkrabbers, grote industrieterreinen, winkelstraten en de altijd schone straten. Aan de kustlijn vindt u een aantal brede zandstranden en in het binnenland een aantal natuurreservaten en botanische tuinen.</p>
                    <a href="../views/pages/bestemming/singapore/singapore.html" class="bestemmingen-button bg-bon-blau-donker text-bon-wit p-3 rounded-xl mb-5 hover:bg-bon-geel hover:duration-500 hover:shadow-xl z-40" target="_blank">Ontdek Singapore</a>
                </div>
            </div>                 
            
        </div>

        <div class="flex justify-center w-full -mt-48">
            <hr class="border border-bon-blau-donker w-1/2 rounded-b-lg flex justify-center m-5">
        </div>
        
    </div>

</section>
`;


class Bestemmingen extends HTMLElement {
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


customElements.define('reusable-bestemmingen', Bestemmingen);
