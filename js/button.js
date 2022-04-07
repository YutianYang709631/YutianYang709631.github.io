const docStyle = document.documentElement.style
const aElem = document.querySelectorAll('a')


for (let i = 0; i < aElem.length; ++i) {
    let item = aElem[i];
    let boundingClientRect = item.getBoundingClientRect()

    item.onclick = function (e){

        item.style.setProperty('')


    }
    item.onmousemove = function (e) {
        boundingClientRect = item.getBoundingClientRect()

        let x = e.clientX - boundingClientRect.left
        let y = e.clientY - boundingClientRect.top

        let xc = boundingClientRect.width / 2
        let yc = boundingClientRect.height / 2

        let dx = x - xc
        let dy = y - yc

        item.style.setProperty('--rx', `${dy / -.8}deg`)
        item.style.setProperty('--ry', `${dx / 3}deg`)

    }

    item.onmouseleave = function (e) {

        item.style.setProperty('--ty', '0')
        item.style.setProperty('--rx', '0')
        item.style.setProperty('--ry', '0')

    }

    item.onmousedown = function (e) {

        item.style.setProperty('--tz', '-25px')
        item.style.setProperty('--ty', '1px')
    }

    item.onmouseup = function (e) {

        item.style.setProperty('--tz', '-15px')
        item.style.setProperty('--ty', '-.7px')
    }
}
