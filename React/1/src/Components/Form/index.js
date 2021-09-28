import React, { useState, useEffect } from "react";
import Button from "./Buttons";
import Select from "./Select";
import CheckBox from "./CheckBox";
import Input from "./Input";
import { validatesBlur, validatesChange, validatesMouseLeave } from '../../func/utils/formValidation'

function Form() {

    const [nameError, setNameError] = useState()
    const [emailError, setEmailError] = useState()
    const [phoneError, setPhoneError] = useState()
    const [agreeError, setAgreeError] = useState()
    const [validForm, setValidForm] = useState('')

    useEffect(() => {
        if (nameError || emailError || phoneError || agreeError) setValidForm(false)
        if (nameError === '' && emailError === '' && phoneError === '' && agreeError === '') setValidForm(true)
    }, [nameError, emailError, phoneError, agreeError])

    return (
        <div className="form-block">
            <form>
                <div className="form-block__top">
                    <h1>Регистрация</h1>
                    <p>Уже есть аккаунт? <a href="">Войти</a></p>
                </div>

                <Input props={{
                    placeholder: 'Введите Ваше имя',
                    name: 'name',
                    onChange: e => validatesChange('name', e.target.value, setNameError),
                    onBlur: e => validatesBlur(e.target.value, setNameError),
                }} label="Имя" error={nameError} />

                <Input props={{
                    placeholder: 'Введите ваш email',
                    name: 'email',
                    onChange: e => validatesChange('email', e.target.value, setEmailError),
                    onBlur: e => validatesBlur(e.target.value, setEmailError),
                }} label="Email" error={emailError} />

                <Input props={{
                    placeholder: 'Введите номер телефона',
                    name: 'phone',
                    onChange: e => validatesChange('phone', e.target.value, setPhoneError),
                    onBlur: e => validatesBlur(e.target.value, setPhoneError)
                }} label="Номер телефона" error={phoneError} />

                <Select props={{ name: 'lang', }} label="Язык" values={['Русский', 'Английский', 'Китайский', 'Испанский']} />

                <CheckBox props={{
                    name: 'agreement',
                    required: true,
                    onChange: e => validatesChange('agreement', e.target.checked, setAgreeError),
                    onMouseLeave: e => validatesChange('agreement', e.target.checked, setAgreeError)
                }} label={<>Принимаю <a href="">условия</a> использования</>} error={agreeError} />

                <Button props={{ disabled: !validForm, type: 'submit' }} textBtn="Зарегистрироваться" />
            </form>
        </div>
    );
}

export default Form;
