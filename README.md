## superror 

> error stack parser and printer

[![superror](https://img.shields.io/npm/v/superror.svg)](https://npmjs.org/superror)
[![Build Status](https://travis-ci.org/song940/superror.svg?branch=master)](https://travis-ci.org/song940/superror)

### Installation

```bash
$ npm install superror --save
```

### Example

```js
const { parseStackTrace } = require('superror');

const err = new Error('BOOM!');

const stack = parseStackTrace(err.stack);

console.log(stack);

```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT

This work is licensed under the [MIT license](./LICENSE).

---