(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var names = {};
    exports.timer = {};
    exports.timer.start = function (name, delay) {
        if (typeof name === 'string') {
            exports.timer.stop(name);
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
    exports.timer.stop = function (name) {
        if (typeof name == 'string') {
            if (names[name]) {
                clearTimeout(names[name]);
                delete names[name];
            }
        }
    };
});
