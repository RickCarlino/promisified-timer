# timer-promise

**This is an adaptation of Wongoo Lee's [timer-promise](https://github.com/iwongu/timer-promise) library**. Thanks, Wongoo!

Stuff I added ontop of the original:

 * UMD modules for frontend use.
 * Typescript definitions.
 * Use ES6 Promises (or a polyfil) instead of bringing it in via node require().

Promise version of setTimeout and clearTimeout

You can start and stop timer like this.

```js
var timer = require('timer-promise');

Timer.start('foo', 5000).
  then(function() {
  }, function(cancelled) {
  });
...
Timer.stop('foo');
```
instead of
```js
var timeoutId = setTimeout(function() {
}, 5000);
...
clearTimeout(timeoutId);
```
