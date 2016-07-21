// V 0.1.3
  export interface PromisifiedTimer {
    /** Start a timer with a label, allowing cancelation. */
    start(name: string, delay: number): Promise<string>;
    start(name: number): Promise<number>;
    stop(name: string): any;
  }

  var names: { [name: string]: number; } = {};

  export var Timer = {} as PromisifiedTimer;

  Timer.start = function (name: string|number, delay?: number) {
    if (typeof name === 'string') {
      Timer.stop(name);
      return new Promise<string|number>(function (resolve, reject) {
        names[name] = setTimeout(function () {
          if (names[name]) {
            resolve(name);
            delete names[name];
          } else {
            reject();  // cleared
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

  Timer.stop = function (name: string) {
    if (typeof name == 'string') {
      if (names[name]) {
        clearTimeout(names[name]);
        delete names[name];
      }
    }
  };



