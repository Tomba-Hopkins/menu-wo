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