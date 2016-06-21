namespace PromisifiedTimer {

  export interface Rejection {
    (err?: void): any;
  }

  export interface Resolution {
    (val?: number | string): any;
  }

  export interface Promise {
    new (handler: (resolve: Function, reject: Function) => void): Promise;
    then(resolver: Resolution, rejector?: Rejection): Promise;
    catch(rejector: Rejection): Promise;
  }

  export interface Timer {
    /** Start a timer with a label, allowing cancelation. */
    start(name: string, delay: number): Promise;
    start(delay: number): Promise;
    stop(name: string): any;
  }

  interface Names {
    [name: string]: number;
  }

  declare var Promise: Promise;
  var names: Names = {};

  export var timer = {} as Timer;

  timer.start = function (name: string | number, delay?: number) {
    if (typeof name === 'string') {
      timer.stop(name);
      return new Promise(function (resolve, reject) {
        names[name] = setTimeout(function () {
          if (names[name]) {
            resolve(name);
            delete names[name];
          } else {
            reject();  // cleared
          }
        }, delay);
      });
    };
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

  timer.stop = function (name: string) {
    if (typeof name == 'string') {
      if (names[name]) {
        clearTimeout(names[name]);
        delete names[name];
      }
    }
  };

}

declare module "promisified-timer" {
  export = PromisifiedTimer;
}



