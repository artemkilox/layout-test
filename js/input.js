const rangeVal = document.getElementById('range-val')
const range = document.getElementById('range')

range.addEventListener('input', () => {
    rangeVal.innerHTML = range.value + "%"
})