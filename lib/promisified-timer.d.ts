export interface PromisifiedTimer {
    /** Start a timer with a label, allowing cancelation. */
    start(name: string, delay: number): Promise<string>;
    start(name: number): Promise<number>;
    stop(name: string): any;
}
export declare var timer: PromisifiedTimer;
