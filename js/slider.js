const backBtn   = document.getElementById('backBtn')
const slider    = document.getElementById('slider')
const nextBtn   = document.getElementById('nextBtn')

const itemsQuan = 6

const itemsShows = 3
const max = itemsQuan - itemsShows
const step = window.screen.width > 960 ? 17 : window.screen.width >= 280 ? 62 : 24
let rightMove = true
let currentPosition = 0

const nextSlide = () => {
    if(currentPosition < max){
        currentPosition++
        if(currentPosition === max){
            nextBtn.classList.add('blocked')
        }
        if(currentPosition > 0){
            backBtn.classList.remove('blocked')
        }
        slider.style.marginLeft = "-" + (step * currentPosition).toString() + "vw"
    }
}
const prevSlide = () => {
    if(currentPosition > 0){
        currentPosition--
        if(currentPosition === 0){
            backBtn.classList.add('blocked')
        }
        if(currentPosition < max){
            nextBtn.classList.remove('blocked')
        }
        slider.style.marginLeft = "-" + (step * currentPosition).toString() + "vw"
    }
}

nextBtn.addEventListener('click', () => {
    nextSlide()
})
backBtn.addEventListener('click', () => {
    prevSlide()
})
setInterval( () => {
    if(currentPosition === max){
        rightMove = false
    }
    if(currentPosition === 0){
        rightMove = true
    }
    if(currentPosition < max && rightMove === true){
        nextSlide()
    } else if(currentPosition > 0 && rightMove === false){
        prevSlide()
    }
}, 3000)