//. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.

let txt = '"Я буду искать клад один", – подумав, сказал Петров.'

const regExp1 = new RegExp('\"','g');

txt = txt.replace(regExp1,'\'');

console.log(txt);

//Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

let txt2 = '"We aren\'t that good in coding, are we?"'

const regExp2 = new RegExp('[^n]\"','g');

txt2 = txt2.replace(regExp1,'\'');

console.log(txt2);