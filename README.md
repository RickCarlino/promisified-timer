# timer-promise

**This is an adaptation of Wongoo Lee's [timer-promise](https://github.com/iwongu/timer-promise) library**. Thanks, Wongoo!

Stuff I added ontop of the original:

 * UMD modules for frontend use.
 * Typescript definitions.

Promise version of setTimeout and clearTimeout

You can start and stop timer like this.

```js
var timer = require('timer-promise');

timer.start('foo', 5000).
  then(function() {
  }, function(cancelled) {
  });
...
timer.stop('foo');
```
instead of
```js
var timeoutId = setTimeout(function() {
}, 5000);
...
clearTimeout(timeoutId);
```
