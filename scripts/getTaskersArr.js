"use strict";

const arr = [];

function addToArr(x, y, text, testsArr) {
    const size = 90;
    const w = size;
    const h = size;
    arr.push({
        x, y, text, testsArr, size, w, h
    });
}

addToArr(690, 470, " Функция для расчета суммы чисел main(a, b) ", [

]);

addToArr(-30, 470, " Функция для получения наибольшего из двух чисел main(a, b) ", [

]);

export default function getTaskersArr() {
    return arr;
}