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


// Stopwatch
const stopwatchTime = document.querySelector('p-time')
const startButton = document.querySelector('.start')
const stopButton = document.querySelector('.pause')

const pJam = document.querySelector('.p-h')
const pMenit = document.querySelector('.p-m')
const pDetik = document.querySelector('.p-s')

let jam = 0
let menit = 0
let detik = 0
let muter = null

startButton.addEventListener('click', () => {
    if (muter === null) {
        muter = setInterval(() => {
            detik += 1
            pDetik.innerHTML = detik
            
            if (detik === 60 ){
                detik = 0
                pDetik.innerHTML = detik
                menit += 1
                pMenit.innerHTML = menit
                
                if (menit === 60 ) {
                    menit = 0
                    pMenit.innerHTML = menit
                    jam += 1
                    pJam.innerHTML = jam
                }
                
            }
            
        }, 1000)
    }
    
})


stopButton.addEventListener('click', () => {
    if (muter !== null){
        clearInterval(muter)
        muter = null
    }
    detik = 0
    menit = 0
    jam = 0

    pDetik.innerHTML = ""
    pMenit.innerHTML = ""
    pJam.innerHTML = ""
})






const observerNyapu = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('nyapu')
        } else {
            entry.target.classList.remove('nyapu')
        }
    })
})

const swipes = document.querySelectorAll('.swipe')

swipes.forEach((swipe) => {
        observerNyapu.observe(swipe)
})
