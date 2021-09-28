let arr = ['Не владею', 'Использую готовые решения', 'Использую готовые решения и умею их переделывать', 'Пишу сложный JS код'] //Маркеры
let step = parseInt(range.offsetWidth) / (arr.length - 1) // Шаг между маркерами относительно ширины слайдера

let step_half = step / 2 // Половина шага (вычисление положения бегунка)
let marker_pos_arr = [] //Массив с кооринатами каждого маркера (вычисление положения бегунка)
let marker_pos = 0

//Добавляем маркеры на слайдер
for (i = 0; i < arr.length; i++) {
    let marker = createElem('div', 'range-step')
    marker.innerHTML = '<a data-pos="' + i + '" onclick="setSliderPosition(' + i + ')">' + arr[i] + '</a>'
    css(marker, { left: marker_pos + 'px' })

    range.appendChild(marker)

    marker_pos_arr.push(marker_pos) //Положение каждого маркера
    marker_pos += step
}

//Титл для мобилки
let mobile_title = createElem('div', 'mobile-title')
range.before(mobile_title)

//Добавили бегунок
let slider = createElem('div', 'range-slider')
range.appendChild(slider)

let slider_half = slider.offsetWidth / 2
css(slider, { left: 0 - slider_half + 'px' })

//Позиция по умолчанию на 'Использую готовые решения и умею их переделывать'
setSliderPosition(2)

//Позиция бегунка
range.onmousedown = onmousedown
range.addEventListener("touchstart", touchstart, false);

function onmousedown() {
    document.onmousemove = function (e) {
        let position = e.pageX - range.getBoundingClientRect().x //Позиция мышки с учетом положения слайдера на странице

        if (position < marker_pos_arr[0] + step_half) {
            setSliderPosition(0)
        }
        for (i = 0; i <= marker_pos_arr.length; i++) {
            if (position > marker_pos_arr[i] + step_half) {
                setSliderPosition(i + 1)
            }
        }

    };

    document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
    };
}

function touchstart() {
    console.log(1)
    range.addEventListener("touchmove", function (e) {
        let position = e.changedTouches[0].pageX - range.getBoundingClientRect().x //Позиция мышки с учетом положения слайдера на странице

        if (position < marker_pos_arr[0] + step_half) {
            setSliderPosition(0)
        }
        for (i = 0; i <= marker_pos_arr.length; i++) {
            if (position > marker_pos_arr[i] + step_half) {
                setSliderPosition(i + 1)
            }
        }

    });

    document.touchend = () => {
        document.touchmove = null
        document.touchend = null
    };
}

function setActiveClass(pos) {
    document.querySelector('a.active')?.classList.remove('active')
    document.querySelector('[data-pos="' + pos + '"]')?.classList.add('active')
    mobile_title.innerText = arr[pos]
}
function setSliderPosition(pos) {
    setActiveClass(pos)
    pos === 0 ? gradient_percent = '0' : gradient_percent = '20%'
    css(slider, { left: marker_pos_arr[pos] - slider_half + 'px' })
    css(range_polygon, { background: 'linear-gradient( 90deg ,#d0ceff ' + gradient_percent + ', #8986c3 ' + marker_pos_arr[pos] + 'px, #d9d9d9 ' + marker_pos_arr[pos] + 'px)' })
}
function createElem($elem, $class) {
    let elem = document.createElement($elem)
    elem.classList.add($class)
    return elem
}
function css(element, style) {
    for (const property in style) element.style[property] = style[property];
}
