declare namespace PromisifiedTimer {
    interface Rejection {
        (err?: void): any;
    }
    interface Resolution {
        (val?: number | string): any;
    }
    interface Promise {
        new (handler: (resolve: Function, reject: Function) => void): Promise;
        then(resolver: Resolution, rejector?: Rejection): Promise;
        catch(rejector: Rejection): Promise;
    }
    interface Timer {
        /** Start a timer with a label, allowing cancelation. */
        start(name: string, delay: number): Promise;
        start(delay: number): Promise;
        stop: (name: string) => any;
    }
    var timer: Timer;
}
declare module "promisified-timer" {
    export = PromisifiedTimer;
}
