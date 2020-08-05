'use strict';

const Generator = (symbols = 0) => {

    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let date, ms, result = '';
    
    for (let i = 0; i < Math.ceil(symbols/2); i++) {
        date = new Date();
        ms = date.getMilliseconds();
        for(let x = 0; x < 1000900000; x++){}

        if (result.length < symbols) {
            if (ms <= 26) {
                result = result + letters[ms].toUpperCase() + String(ms).slice(0,1);
            } else if (ms > 26 && ms <= 99){
                result = result + letters[Math.floor(ms / 4)].toUpperCase() + String(ms).slice(0,2);
            } else {
                result = result + letters[Math.floor(ms / 10/ 4)] + String(ms).slice(2,3);
            }
        }
    }

    return result.slice(0, symbols);
};

export default Generator;