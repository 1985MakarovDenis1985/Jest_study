//// ========== RegEX ======== ////
//    l...             // => ищет l и любые три буквы включая пробелы
//    ["jJ"]          // => ище любой из символов в скобках
//    [    ] .         // => точка любой символ
//    ["jJ"].t        // => ищет либо J | i что бы после них обязательно была t
//    ["j-J"] [1-9]         // => диапазон
//    $                 // => конец строки
//    ^                 // начало строки
//    \          // экранирование
//    \d         // любая цифра
//    \D         // все, что угодно кроме цифр
//    \s         // пробелы
//    \D         // все, кроме пробелов
//    \w         // буква
//    \W         // все кроме букв
//    \b         // начало строки
//    \B         // начало строки

// ------ квантификация -------
//    n{4}      // искать n порят 4 раза
//    n{4б6}    // искать n от 4 до 6 раза
//    *         // от 0 и выше
//    +         // от 1 и выше
//    ?         // 0 или один раз


//// ========== поиск по объекту через regexp ========= ////
// let arr = [
//     {
//         name: "BMW",
//         email: "bmw@gmail.com",
//         job: 'plant'
//     },{
//         name: "VW",
//         email: "vw@gmail.com",
//         job: 'plant'
//     }
// ];
//
// let str = "Hello word! Nice to meet you";
// function is(str) {
//     return /[B]/.test(str)
// }
//
// for(let i=0; i<arr.length; i++){
//     if (is(arr[i].name)){
//         console.log("true")
//     }else {
//         console.log("false")
//     }
// }