//3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
'use strict'

function validateValues() {
    let nameValue = document.getElementById("name").value;
    let telValue = document.getElementById("tel").value;
    let emailValue = document.getElementById("email").value;
    let txtValue = document.getElementById("subject").value;

    console.log(nameValue + telValue + emailValue + txtValue);

    const regExpName = new RegExp('[А-Яа-яA-Za-z\s]+', 'i');
    const regExpTel = new RegExp('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$', 'i');
    const regExpEmail = new RegExp('^([a-z0-9_\\.-]+)@([a-z0-9_\\.-]+)\\.([a-z\\.]{2,6})$', 'i')

    if(!regExpName.test(nameValue)) {
        document.getElementById("name").classList.add("error");
        alert("Проверьте Имя");
    }
    if(!regExpTel.test(telValue)) {
        document.getElementById("tel").classList.add("error");
        alert("Проверьте телефон");
    }
    if(!regExpEmail.test(emailValue)) {
        document.getElementById("email").classList.add("error");
        alert("Проверьте почту");
    }

}

let myForm = document.getElementsByName('form');
let myButton = document.getElementById('submit');

document.getElementById("myform").addEventListener('submit', validateValues);