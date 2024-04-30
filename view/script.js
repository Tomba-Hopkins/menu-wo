const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('ilang')
        } else {
            entry.target.classList.remove('ilang')
        }
    })
})

const sections = document.querySelectorAll('.section')

sections.forEach((section) => {
    observer.observe(section)
})



// random quotes
const quotes = [
    `"The only way to do great work is to love what you do." ~Steve Jobs`,
    `"Perang sejati adalah perang yang terjadi di dalam diri seseorang." ~Miyamoto Musashi`,
    `"Don't count the days, make the days count." ~Muhammad Ali`,
    `"The soul becomes dyed with the color of its thoughts." ~Marcus Aurelius`,
    `"Hidup ini keras dan berat [terlanjur hidup jalani saja] ~Me"`
]

const tombol = document.querySelector('.button-quotes')
const quote = document.querySelector('.quotes')


tombol.addEventListener('click', function(){
    const nilai = Math.floor(Math.random() * 5)
    const isi = quotes[nilai]
    quote.textContent = isi
    quote.style.animation = 'ilang 1s linear'
    quote.style.display = 'flex'

    setTimeout(() => {
        quote.style.animation = 'none'
    }, 2000)


})