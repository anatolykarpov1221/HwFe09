//Создайте функцию, которая принимает цену товара и количество единиц, а затем возвращает общую стоимость.
function itog(price,count){
    const result=price*count;
    return result;
}
console.log(itog(3.5,25));
//Создайте функцию, которая определяет, является ли число четным и возвращает булевое значение.
function even(value){
    if(value%2===0){
        return true;
    }else{
        return false;
    }
}
console.log(even(11))
//Напишите функцию, которая принимает строку и возвращает ее в обратном порядке (reverse использовать нельзя).
function rev(word){
    let reversedWord=""; 
    for(let i=word.length-1; i>=0; i--){
        reversedWord +=word[i];
    }
    return reversedWord;
}
console.log(rev("train"));
// Создайте функцию для конвертации температуры из градусов Цельсия в градусы Фаренгейта.
function farengate(celsius){
    const result =celsius*9/5 + 32
    return result;
}
console.log(farengate(25));