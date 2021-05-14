# Fixed jest DefaultReporter
By default, Jest is using `stderr` as output https://github.com/facebook/jest/issues/5064

This is a tiny wrapper around jest default reporters (DefaultReporter, VerboseReporter, SummaryReporter)
that prints success messages to stdout and errors to stderr.

See how [inner tests](./tests/inner/) print [results](./tests/results/).

## Use
```bash
npm install --save-dev jest-fixed-default-reporter
jest --reporters=jest-fixed-default-reporter/DefaultReporter,jest-fixed-default-reporter/SummaryReporter
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


## Inspiration
`jest-standard-reporter` seemed like way too much code to maintain https://github.com/chrisgalvan/jest-standard-reporter
