//Формирует годы рождения в select
const YEAR_START = 1970,
    YEAR_END = 2015
for (i = YEAR_START; i <= YEAR_END; i++) {
    let option = document.createElement('option');
    option.innerText = i
    birth_year.appendChild(option)
}

//Открывает моб.меню
let nav = document.querySelector('nav')
function openMenu() {
    nav.className === 'open' ? nav.classList.remove('open') : nav.classList.add('open')
}

//Плавный скролл по якорям
const anchors = document.querySelectorAll('a[href*="#"]'),
    animationTime = 300,
    framesCount = 20;
anchors.forEach(function (item) {
    item.addEventListener('click', function (e) {
        nav.classList.remove('open')
        e.preventDefault();
        let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
        let scroller = setInterval(function () {
            let scrollBy = coordY / framesCount;
            if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
        }, animationTime / framesCount);
    });
});

//Заполнить данные о себе
function runDataWrite() {
    window.scrollTo(0, 0);
    nav.classList.remove('open')

    let time_out = 500;

    //questionnaire
    dataWrite('Шакуров Рауль Русланович', '[placeholder="ФИО"]')
    setTimeout(() => { birth_year.value = 1995 }, time_out += time_out / 2)
    setTimeout(() => { dataWrite('Казахстан, г. Костанай', '[placeholder="Место проживания"]') }, time_out += time_out / 2)
    setTimeout(() => { dataWrite('Отсутствует', '[placeholder="Skype"]') }, time_out += time_out / 2)
    setTimeout(() => { dataWrite('rshakurov95@mail.ru', '[placeholder="E-mail"]') }, time_out += time_out / 2)
    //experience
    setTimeout(() => { document.querySelectorAll('[type="checkbox"]')[0].checked = true }, time_out += time_out / 7)
    setTimeout(() => { document.querySelectorAll('[type="checkbox"]')[2].checked = true }, time_out += time_out / 7)
    setTimeout(() => { document.querySelectorAll('[type="checkbox"]')[3].checked = true }, time_out += time_out / 7)
    setTimeout(() => { document.querySelectorAll('[type="checkbox"]')[4].checked = true }, time_out += time_out / 7)
    setTimeout(() => { document.querySelectorAll('[type="checkbox"]')[7].checked = true }, time_out += time_out / 7)
    //about
    setTimeout(() => { dataWrite('.', '#about textarea') }, time_out += time_out / 7)

    function dataWrite(str, elem) {
        let new_value = '';
        let count = 0
        let int = setInterval(() => {
            if (new_value.length != str.length) {
                new_value += str[count]
                document.querySelector(elem).value = new_value
                count++
            } else clearInterval(int)
        }, 50)
    }
}


