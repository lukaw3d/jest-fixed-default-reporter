# Fixed jest DefaultReporter
By default, Jest is using `stderr` as output https://github.com/facebook/jest/issues/5064

This is a tiny wrapper around jest default reporters ([DefaultReporter](https://github.com/facebook/jest/blob/master/packages/jest-reporters/src/DefaultReporter.ts), VerboseReporter, SummaryReporter)
that prints success messages to stdout and errors to stderr.

See how [inner tests](./tests/inner/) print [results](./tests/results/).

## Use
```bash
npm install --save-dev jest-fixed-default-reporter
jest --reporters=jest-fixed-default-reporter/DefaultReporter --reporters=jest-fixed-default-reporter/SummaryReporter
```

or
```bash
yarn add --save-dev jest-fixed-default-reporter
```

or
```js
jest.config.js:
{
  "reporters": [
    // "jest-fixed-default-reporter/VerboseReporter",
    "jest-fixed-default-reporter/DefaultReporter",
    "jest-fixed-default-reporter/SummaryReporter"
  ]
}
```

## Implementation

The essence is:
```js
jest --reporters=./Fixed.js

// @file: Fixed.js
const { DefaultReporter } = require('@jest/reporters');
class Fixed extends DefaultReporter {
  // https://github.com/facebook/jest/blob/4453901c0239939cc2c1c8b7c7d121447f6f5f52/packages/jest-reporters/src/DefaultReporter.ts#L28
  // https://github.com/facebook/jest/blob/4453901c0239939cc2c1c8b7c7d121447f6f5f52/packages/jest-reporters/src/BaseReporter.ts#L21-L23
  log(message) {
    process.stdout.write(`${message}\n`);
  }
  // https://github.com/facebook/jest/blob/4453901c0239939cc2c1c8b7c7d121447f6f5f52/packages/jest-reporters/src/DefaultReporter.ts#L196-L207
  printTestFileFailureMessage(...args) {
    const origLog = this.log;
    try {
      this.log = (message) => process.stderr.write(`${message}\n`);
      return super.printTestFileFailureMessage(...args);
    } finally {
      this.log = (message) => process.stdout.write(`${message}\n`);
    }
  }
}
module.exports = Fixed;
```


## Inspiration
`jest-standard-reporter` seemed like way too much code to maintain https://github.com/chrisgalvan/jest-standard-reporter
