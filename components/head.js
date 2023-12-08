var headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<!-- meta -->
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- links -->
<link rel="stylesheet" href="/dist/tailwind.css">
<link rel="shortcut icon" href="/public/assets/bon_travel_favicon_v.2.png">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
<!-- scripts -->
<script src="/components/header.js" type="text/javascript" defer></script>
<script src="/components/nav.js" type="text/javascript" defer></script>
<script src="/components/footer.js" type="text/javascript" defer></script>
<script src="/public/JavaScript/script.js" type="text/javascript" defer></script>
`;

class Head extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        // var fontAwesome = document.querySelector('script[src*="fontawesome"]');
        var shadowRoot = this.attachShadow({ mode: 'closed'});

        // if (fontAwesome) {
        //     shadowRoot.appendChild(fontAwesome.cloneNode());
        // }

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('reusable-head', Head);

// DEVELOPER
//     <script src="/components/head.js" type="text/javascript" defer></script>
{/* <reusable-head></reusable-head> */}



