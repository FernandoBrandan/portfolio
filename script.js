document.addEventListener('DOMContentLoaded', () => {
    Particles.init({
        selector: '.background',
        maxParticles: 15,
        sizeVariations: 10,
        connectParticles: false,
        color: ['#1D267D', '#9BA4B5']
    });
})

const btnScroll = document.querySelector('.scroll')
btnScroll.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
})

const pdf = document.querySelector('.pdf')
pdf.addEventListener('click', () => {
    window.open("Fernando_Brandán_-_Software_Developer .pdf", "_blank");
})
  
const btnSubmit = document.querySelector('.submit')
btnSubmit.addEventListener('click', (e) => {
    Toastify({
        text: "This is a toast",
        duration: 77000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
})