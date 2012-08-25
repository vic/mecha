mecha
=====

Ensure your node examples/*.js work by using them as mocha tests.

## Setup ##

Add `mecha` to your package.json `devDependencies`

```shell
npm install
```

## Usage ##

Now your example files can use mocha when run.

```javascript
// This is my awesome project example at examples/awesome.js
var mecha = require('mecha');

// use `describe' and `it`
mecha.log("This will be printed only when run directly as an example");

// when run as an example use a dot reporter, if no argument is given
// a silent reporter will be used.
mecha({reporter: 'dot'});
```

Users run your example, and see the message printed above

```shell
node examples/awesome.js
```


But when run as a test, they see test reports.

```shell
mocha examples/awesome.js
```

You can therefore include your example files to your test harness,
add a `test/examples.js` file to your project

```javascript
// Ensure all examples are working
require('../examples/awesome')
```
