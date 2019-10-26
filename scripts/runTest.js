"use strict";

import global from "./global";

export default function runTest(tests) {
    const code = codeInputElement.value + "";

    if(tests) {
        let GOOD = true;

        tests.forEach((test) => {
            try {
                const result = eval(code + "  " + test.f);
                if(result !== test.r) GOOD = false;
                console.log(result + "_____" + test.r);
            } catch (err) {
                GOOD = false;
            }
        });

        if(GOOD === true) {
            global().dialog = true;
            global().friend.y = 1000;
        }
    }
}
