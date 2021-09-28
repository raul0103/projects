

export function validatesChange(name, value, setError) {
    if (typeof value !== 'boolean') value = value.trim()

    switch (name) {
        case 'name':
            validateInput(
                !/[0-9_().^+*?=%:;,]/.test(value) && value,
                'Введен недопустимый символ'
            )
            break;
        case 'email':
            validateInput(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value),
                'Электронный адрес заполнен не корректно'
            )
            break;
        case 'phone':
            validateInput(
                /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value) && value && value.match(/\d/g).length === 11,
                'Номер телефона заполнен не корректно'
            )
            break;
        case 'agreement':
            validateCheckbox(value, 'Примите условия использования')
            break;
    }

    function validateInput(condition, error) {
        if (condition) setError('')
        else if (!value) setError('Данное поле обязательно для заполнения')
        else setError(error)
    }

    function validateCheckbox(condition, error) {
        if (!condition) setError(error)
        else setError('')
    }
}

export function validatesBlur(value, setError) {
    if (typeof value !== 'boolean') value = value.trim()
    if (!value) setError('Данное поле обязательно для заполнения')
}