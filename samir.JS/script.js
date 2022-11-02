// let text = "Lex Luter has a big suit"

// console.log(
//     text.slice(14,15).toUpperCase() +
//     text.slice(0,3).toLowerCase()
// );

// let txt = "Lex Luter has a big suit"


// console.log(
//     txt.slice(txt.search('a'), txt.search('a')+ 1) +
//     txt.slice(txt.search('Lex'), txt.search('Lex') + 3)
// );

// let txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet natus voluptas tempore aut consectetur eos, corporis eaque facilis recusandae mollitia ut tempora itaque consequuntur rem culpa? Corporis debitis iusto ipsam."
// console.log(
//     txt.slice(txt.search('sam'), txt.search('sam') + 3).toUpperCase() +
//     txt.slice(txt.search('i'), txt.search('i') + 1) +
//     txt.slice(txt.search('r'), txt.search('r') + 1)
// );

// let box = prompt('Вам есть 18?')

// if(box >= 18) {
//     console.log('skipped');
// } else {
//     console.log('relax')
// }

// let userName = prompt('Как зовут?')
// let userAge = prompt('Вам есть 18?')

// if(userName[0]  ==="A" && userAge >= 18) {
//     console.log('passed');
// } else {
//     console.log('failed')
// }

// let a = +prompt('a')
// let m = prompt('+ - * /')
// let b = +prompt('b')

// if(m === "+"){
//     alert(a+b)
// }else if(m === "-"){
//     alert(a-b)
// }else if(m === "*"){
//     alert(a*b)
// }else if(m === "/"){
//     alert(a/b)
// }

let name = prompt("Как вас зовут?").toLowerCase()

if (name === "alex") {
    let account = prompt("Номер счета?")
    if (account === '7777'){
        let money = prompt("Сколько обналичить?")
        if (money <= 10000) {
            alert("хорошо")
        }
        else {
            alert("денег недoстаточно")
        }
    }
    else (
        alert("Пользователь не найден")
    )
}
else {
    alert("Пользователь не найден")
}

