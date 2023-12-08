// SLIDER

const carrouselBarInhoud = document.getElementById("carrousel-bar-inhoud"),
    carrouselBarInhoudGlider = document.getElementById("carrousel-bar-inhoud-glider"),
    carrouselBarInhoudImages = document.querySelectorAll("img"),
    carrouselBarInhoudButtons = document.querySelectorAll("#carrousel-bar-inhoud i");

let imageIndex = 1, intervalId;

const autoSlide = () => {
    intervalId = setInterval(() => slideImage(++imageIndex), 4000);
};

autoSlide();

const slideImage = () => {
    console.log(imageIndex);
    imageIndex = imageIndex === carrouselBarInhoudImages.length ? 0 : imageIndex < 0 ? carrouselBarInhoudImages.length - 1 : imageIndex;
    carrouselBarInhoudGlider.style.transform = `translate(-${imageIndex * 12}%)`;
};


const updateClick = (e) => {
    clearInterval(intervalId);
    imageIndex += e.target.id === "carrousel-bar-inhoud-next" ? 1 : -1;
    slideImage(imageIndex);
    autoSlide();
};

carrouselBarInhoudButtons.forEach((button) => button.addEventListener("click", updateClick));


carrouselBarInhoud.addEventListener("mouseover", () => clearInterval(intervalId));

carrouselBarInhoud.addEventListener("mouseleave", autoSlide);






// COOKIES

setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ")
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0) value = val.substring(name.length);
    })

    return value;
}

document.getElementById("cookies-cookies-button").addEventListener("click", () => {
    document.getElementById("cookies").style.display = "none";
    setCookie("cookie", true, 30);
})

cookieMessage = () => {
    if(!getCookie("cookie"))
        document.getElementById("cookies").style.display = "block";
}

window.addEventListener("load", cookieMessage);






// PAYPAL

// window.paypal
//   .Buttons({
//     async createOrder() {
//       try {
//         const response = await fetch("/api/orders", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           // use the "body" param to optionally pass additional order information
//           // like product ids and quantities
//           body: JSON.stringify({
//             cart: [
//               {
//                 id: "YOUR_PRODUCT_ID",
//                 quantity: "YOUR_PRODUCT_QUANTITY",
//               },
//             ],
//           }),
//         });
        
//         const orderData = await response.json();
        
//         if (orderData.id) {
//           return orderData.id;
//         } else {
//           const errorDetail = orderData?.details?.[0];
//           const errorMessage = errorDetail
//             ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
//             : JSON.stringify(orderData);
          
//           throw new Error(errorMessage);
//         }
//       } catch (error) {
//         console.error(error);
//         resultMessage(`Could not initiate PayPal Checkout...<br><br>${error}`);
//       }
//     },
//     async onApprove(data, actions) {
//       try {
//         const response = await fetch(`/api/orders/${data.orderID}/capture`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
        
//         const orderData = await response.json();
//         // Three cases to handle:
//         //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
//         //   (2) Other non-recoverable errors -> Show a failure message
//         //   (3) Successful transaction -> Show confirmation or thank you message
        
//         const errorDetail = orderData?.details?.[0];
        
//         if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
//           // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
//           // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
//           return actions.restart();
//         } else if (errorDetail) {
//           // (2) Other non-recoverable errors -> Show a failure message
//           throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
//         } else if (!orderData.purchase_units) {
//           throw new Error(JSON.stringify(orderData));
//         } else {
//           // (3) Successful transaction -> Show confirmation or thank you message
//           // Or go to another URL:  actions.redirect('thank_you.html');
//           const transaction =
//             orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
//             orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
//           resultMessage(
//             `Transaction ${transaction.status}: ${transaction.id}<br><br>See console for all available details`,
//           );
//           console.log(
//             "Capture result",
//             orderData,
//             JSON.stringify(orderData, null, 2),
//           );
//         }
//       } catch (error) {
//         console.error(error);
//         resultMessage(
//           `Sorry, your transaction could not be processed...<br><br>${error}`,
//         );
//       }
//     },
//   })
//   .render("#paypal-button-container");
  
// // Example function to show a result to the user. Your site's UI library can be used instead.
// function resultMessage(message) {
//   const container = document.querySelector("#result-message");
//   container.innerHTML = message;
// }