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

addToArr(1250, 470, " Only the truth will break the wall ", [
    {
        f: "main()",
        r: true,
    }
]);

addToArr(690, 470, " Function to get the sum of integers main(a, b) ", [
    {
        f: "main(2, 3)",
        r: 5,
    },
    {
        f: "main(12, 8)",
        r: 20,
    },
    {
        f: "main(-2, -3)",
        r: -5,
    }
]);

addToArr(-30, 470, " Function to get the maximum number of two numbers main(a, b) ", [
    {
        f: "main(9, 3)",
        r: 9,
    },
    {
        f: "main(2, 7)",
        r: 7,
    },
    {
        f: "main(5, 5)",
        r: 5,
    }
]);

export default function getTaskersArr() {
    return arr;
}