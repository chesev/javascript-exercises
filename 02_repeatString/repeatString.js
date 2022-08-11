const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    if (num === 0) return '';
    if (num === 1) return str;


    return str + repeatString(str, num - 1); 
};

repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
repeatString('hey', Math.floor(Math.random()* 20));
repeatString('', 0);

// Do not edit below this line
module.exports = repeatString;
