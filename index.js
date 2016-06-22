"use strict";
var names = {};
exports.Timer = {};
exports.Timer.start = function (name, delay) {
    if (typeof name === 'string') {
        exports.Timer.stop(name);
        return new Promise(function (resolve, reject) {
            names[name] = setTimeout(function () {
                if (names[name]) {
                    resolve(name);
                    delete names[name];
                }
                else {
                    reject(); // cleared
                }
            }, delay);
        });
    }
    if (typeof name === 'number') {
        delay = name;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(name);
            }, delay);
        });
    }
    throw new Error("Timer expects a number or string.");
};
exports.Timer.stop = function (name) {
    if (typeof name == 'string') {
        if (names[name]) {
            clearTimeout(names[name]);
            delete names[name];
        }
    }
};
