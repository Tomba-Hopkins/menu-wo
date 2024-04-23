// const card = document.querySelector('.card')

// window.addEventListener('scroll', () => {
//     if(window.scrollY > 20) {
//         card.classList.add('fade')
//     } else {
//         card.classList.remove('fade')
//     }
// })

// observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade')
        } else {
            entry.target.classList.remove('fade')
        }
    })
})

const cards = document.querySelectorAll('.card')
cards.forEach((card) => {
    observer.observe(card)
})