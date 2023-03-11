const range = document.querySelector('.range')
const process = document.querySelector('.process')
const processPercent = document.querySelector('.process span')

function updateProcess(percent) {
    process.style.width = `${percent}%`
    processPercent.innerHTML = `${percent}%`
    document.querySelector('body').style.backgroundColor = `rgba(0, 0, 0, ${percent/100}`
    range.style.border = `2px solid rgba(0, 0, 0, ${(100-percent)/100})`
    range.style.outline = `2px solid rgba(255, 255, 255, ${percent/100})`
}

range.addEventListener('mousemove', function(e) {
    // console.log(e.pageX)
    // console.log(this.offsetLeft)
    // console.log(this.offsetWidth)
    let percent = Math.round(((e.pageX - this.offsetLeft) / this.offsetWidth) * 100)
    // console.log(percent)
    updateProcess(percent)

})
